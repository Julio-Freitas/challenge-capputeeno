import { renderWithProvider } from '@/utils/tests/helpers';
import { CartControl } from '..';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockUseCart = jest.fn();

const mockPushRouter = jest.fn();
jest.mock('next/navigation', () => ({
    ...jest.requireActual('next/navigation'),
    useRouter: () => ({
        push: () => mockPushRouter()
    })
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
    });

    it('shoudl render with value totalcart', () => {
        mockUseCart.mockImplementationOnce(() => ({
            totalItemsCart: 10
        }));
        renderWithProvider(<CartControl />);
        expect(screen.queryByTestId('totalCart')?.textContent).toBe('10');
    });

    it('should be call function redirect', async () => {
        mockUseCart.mockImplementationOnce(() => ({
            totalItemsCart: 10
        }));
        renderWithProvider(<CartControl />);
        await userEvent.click(screen.getByTestId('wrapper-card'));
        expect(mockPushRouter).toHaveBeenCalledTimes(1);
    });
});
