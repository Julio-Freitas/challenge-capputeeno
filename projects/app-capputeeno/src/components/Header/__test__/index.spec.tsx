import { render, screen } from '@testing-library/react';
import { Header } from '..';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}));

jest.mock('../../CartControl', () => ({
    __esModule: true,
    CartControl: () => <div data-testid="cartControl" />
}));

jest.mock('../../input', () => ({
    PrimaryInputWSearchIcon: () => (
        <input data-testid="primaryInputWSearchIcon" />
    )
}));

describe('<Header />', () => {
    it('should render correctly', () => {
        render(<Header />);
        const logo = screen.getByText(/Capputeeno/i);
        const input = screen.getByTestId(/primaryInputWSearchIcon/i);
        const cartControl = screen.getByTestId('cartControl');
        expect(logo).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(cartControl).toBeInTheDocument();
    });
});
