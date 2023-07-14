import { renderWithProvicer } from '@/utils/tests/helpers';
import { CartControl } from '..';
import { screen } from '@testing-library/react';

const mockUseCart = jest.fn();
jest.mock('../../../hooks/useCart', () => ({
    useCart: () => mockUseCart()
}));
describe('<CartControl', () => {
    it('should render correctly', () => {
        mockUseCart.mockImplementationOnce(() => ({
            totalCart: 0
        }));
        renderWithProvicer(<CartControl />);

        expect(screen.queryByTestId('totalCart')).not.toBeInTheDocument;
    });
    it('shoudl render with value totalcart', () => {
        mockUseCart.mockImplementationOnce(() => ({
            totalCart: 10
        }));
        renderWithProvicer(<CartControl />);
        expect(screen.queryByTestId('totalCart')?.textContent).toBe('10');
    });
});
