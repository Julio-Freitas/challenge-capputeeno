import { renderWithProvider } from '@/utils/tests/helpers';
import { PrimaryInputWSearchIcon } from '..';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockHandleChangeInput = jest.fn();
const mockInitialValue = '';
describe('<PrimaryInputWSearchIcon', () => {
    it('should render correctly', () => {
        renderWithProvider(
            <PrimaryInputWSearchIcon
                value={mockInitialValue}
                handleChange={mockHandleChangeInput}
                placeholder="Input to testing"
            />
        );

        expect(screen.getByPlaceholderText(/Input to testing/i))
            .toBeInTheDocument;
        // expect(screen.getByTestId('icon-search')).toBeInTheDocument;
    });

    it('should rener correctly when change value', async () => {
        renderWithProvider(
            <PrimaryInputWSearchIcon
                value={mockInitialValue}
                handleChange={mockHandleChangeInput}
                placeholder="Input to testing"
            />
        );
        const input = screen.getByRole('textbox');
        expect(input.textContent).toBe('');
        await userEvent.type(input, 'AB');
        expect(mockHandleChangeInput).toHaveBeenCalledTimes(2);
    });
});
