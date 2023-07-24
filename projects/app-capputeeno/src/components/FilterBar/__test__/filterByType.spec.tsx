import { renderWithProvider } from '@/utils/tests/helpers';
import { FilterByType } from '../filterByType';
import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FilterType } from '@/types/enum/filter';

let currentType = FilterType.ALL;
jest.mock('../../../hooks/useFilter', () => ({
    useFilter: () => ({
        setType: (value: FilterType) => {
            currentType = value;
            return value;
        },
        type: currentType
    })
}));
describe('<FilterByType />', () => {
    it('should be render default', () => {
        renderWithProvider(<FilterByType />);
        const optionAll = screen.getByRole('button', { name: /todos/i });
        const optionTshirt = screen.getByRole('button', { name: /Camisetas/i });
        const optionMugs = screen.getByRole('button', { name: /Canecas/i });
        expect(optionAll.parentNode).toHaveAttribute('data-selected', 'true');
        expect(optionTshirt.parentNode).toHaveAttribute(
            'data-selected',
            'false'
        );
        expect(optionMugs.parentNode).toHaveAttribute('data-selected', 'false');
        expect(FilterType[currentType]).toEqual('ALL');
    });

    it('should change item selected to "Camisetas"', async () => {
        const { rerender } = renderWithProvider(<FilterByType />);
        const optionTshirt = screen.getByRole('button', {
            name: /Camisetas/i
        });
        expect(optionTshirt.parentNode).toHaveAttribute(
            'data-selected',
            'false'
        );

        await act(async () => userEvent.click(optionTshirt));
        rerender(<FilterByType />);
        await waitFor(() => {
            expect(
                screen.getByRole('button', {
                    name: /Camisetas/i
                }).parentNode
            ).toHaveAttribute('data-selected', 'true');
            expect(FilterType[currentType]).toEqual('SHIRT');
        });
    });

    it('should change item selected to "Canecas"', async () => {
        const { rerender } = renderWithProvider(<FilterByType />);
        const optionTshirt = screen.getByRole('button', {
            name: /Canecas/i
        });

        expect(optionTshirt.parentNode).toHaveAttribute(
            'data-selected',
            'false'
        );

        await act(async () => userEvent.click(optionTshirt));
        rerender(<FilterByType />);
        await waitFor(() => {
            expect(
                screen.getByRole('button', {
                    name: /Canecas/i
                }).parentNode
            ).toHaveAttribute('data-selected', 'true');
            expect(FilterType[currentType]).toEqual('MUG');
        });
    });
});
