import { screen } from '@testing-library/react';
import { ProductsList } from '..';
import { renderWithProvider } from '@/utils/tests/helpers';
import * as responseMock from '../__mock__/response';

const mockUseProducts = jest.fn();

jest.mock('../../../hooks/useProducts', () => ({
    ...jest.requireActual('../../../hooks/useProducts'),
    useProducts: () => mockUseProducts()
}));
describe('<ProductList />', () => {
    it('should render "carregando"', () => {
        mockUseProducts.mockImplementationOnce(() => ({
            data: responseMock.empty,
            isLoading: true
        }));
        renderWithProvider(<ProductsList />);

        expect(
            screen.getByRole('heading', { name: /carregando/i })
        ).toBeInTheDocument();
    });

    it('should render list product', async () => {
        mockUseProducts.mockImplementationOnce(() => ({
            data: responseMock.data,
            isLoading: false
        }));

        renderWithProvider(<ProductsList />);

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByRole('list').childElementCount).toBe(
            responseMock.data.length
        );
    });
});
