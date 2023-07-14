import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProdutoPage } from '..';

const mockUseSearchParams = jest.fn();
const mockRedirectnext = jest.fn();
jest.mock('next/navigation', () => ({
    useSearchParams: () => mockUseSearchParams(),
    redirect: () => mockRedirectnext()
}));

const addProductInCartMock = jest.fn();

jest.mock('../../../hooks/useCart', () => ({
    useCart: () => ({
        ...jest.requireActual('../../../hooks/useCart'),
        addProductInCart: () => addProductInCartMock()
    })
}));

const mockUseProduct = jest.fn();
jest.mock('../../..//hooks/useProduct', () => ({
    useProduct: () => mockUseProduct()
}));

import { ProductData } from '@/types/server/products';
import { renderWithProvicer } from '@/utils/tests/helpers';
import { dataMock } from '../__mocks__/data';

const requestProduct = (id: string, data: ProductData, isLoading: boolean) => {
    mockUseSearchParams.mockImplementationOnce(() => ({
        get: () => id
    }));
    mockUseProduct.mockImplementationOnce(() => ({
        data,
        isLoading
    }));
};
describe('<ProdutoPage />', () => {
    it('should render correctly', async () => {
        requestProduct(dataMock.id, dataMock, false);
        renderWithProvicer(<ProdutoPage />);

        expect(screen.getByRole('link', { name: /voltar/i })).toBeInTheDocument;
        expect(screen.getByRole('img')).toBeInTheDocument;
        expect(screen.getByRole('button', { name: /Adicionar ao carrinho/i }));
        expect(screen.getByText(/Product testing/i)).toBeInTheDocument;
        expect(screen.getByText(/Description of product/i)).toBeInTheDocument;
    });

    it('should call function add item in cart', async () => {
        requestProduct(dataMock.id, dataMock, false);

        renderWithProvicer(<ProdutoPage />);

        await waitFor(async () => {
            const addCartButton = screen.getByRole('button', {
                name: /Adicionar ao carrinho/i
            });
            await userEvent.click(addCartButton);
            expect(addProductInCartMock).toHaveBeenCalledTimes(2);
        });
    });

    it('should render loading text', async () => {
        requestProduct(dataMock.id, dataMock, true);
        renderWithProvicer(<ProdutoPage />);

        expect(screen.getByRole('heading', { name: /Carregando.../i }))
            .toBeInTheDocument;
    });

    it('should redirect to product list when not id', () => {
        requestProduct('', dataMock, false);
        renderWithProvicer(<ProdutoPage />);

        expect(mockRedirectnext).toBeCalledTimes(1);
    });
});
