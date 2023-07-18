import { renderWithProvider } from '@/utils/tests/helpers';
import { CartControl } from '..';
import { screen } from '@testing-library/react';

const mockUseCart = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}));
jest.mock('../../../hooks/useCart', () => ({
    useCart: () => mockUseCart()
}));

describe('<CartControl', () => {
    it('should render correctly', async () => {
        mockUseCart.mockImplementationOnce(() => ({
            totalItemsCart: 0
        }));
        renderWithProvider(<CartControl />);

        expect(screen.queryByTestId('totalCart')).not.toBeInTheDocument();
        screen.debug();
    });

    it('shoudl render with value totalcart', () => {
        mockUseCart.mockImplementationOnce(() => ({
            totalItemsCart: 10
        }));
        renderWithProvider(<CartControl />);
        expect(screen.queryByTestId('totalCart')?.textContent).toBe('10');
    });
});
