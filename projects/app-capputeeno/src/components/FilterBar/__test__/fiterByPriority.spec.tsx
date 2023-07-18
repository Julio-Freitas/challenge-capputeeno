import { renderWithProvider } from '@/utils/tests/helpers';
import { FilterByPriority } from '../filterByPriority';
import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FiltePriority } from '@/types/enum/filter';

let currentPriority = FiltePriority.NEWS;
jest.mock('../../../hooks/useFilter', () => ({
    useFilter: () => ({
        priority: FiltePriority.NEWS,
        setPriority: (value: FiltePriority) => {
            currentPriority = value;
            return value;
        }
    })
}));
describe('<FilterByPriority', () => {
    it('Should render inital', () => {
        renderWithProvider(<FilterByPriority />);
        expect(FiltePriority[currentPriority]).toEqual('NEWS');
        expect(screen.getByRole('button', { name: /Organizar por/i }))
            .toBeInTheDocument;
        expect(screen.queryByRole('list')).not.toBeInTheDocument;
    });

    it('should render list when click "Organizar por"', async () => {
        renderWithProvider(<FilterByPriority />);
        const button = screen.getByRole('button', { name: /Organizar por/i });
        expect(screen.queryByRole('list')).not.toBeInTheDocument;

        userEvent.click(button);
        await waitFor(() => {
            expect(screen.getByRole('list')).toBeInTheDocument;
        });
    });

    it('should click to have filter Preço: maior menor', async () => {
        renderWithProvider(<FilterByPriority />);
        const button = screen.getByRole('button', {
            name: /Organizar por/i
        });

        expect(screen.queryByRole('list')).not.toBeInTheDocument();
        await act(async () => userEvent.click(button));
        expect(screen.queryByRole('list')).toBeInTheDocument();
        const optionNews = screen.getByText(/Preço: maior menor/i);
        await act(async () => userEvent.click(optionNews));
        expect(screen.queryByRole('list')).not.toBeInTheDocument();

        expect(FiltePriority[currentPriority]).toEqual('BIGGEST_PRICE');
    });

    it('should click to have filter Preço: menor maior', async () => {
        renderWithProvider(<FilterByPriority />);
        const button = screen.getByRole('button', {
            name: /Organizar por/i
        });

        expect(screen.queryByRole('list')).not.toBeInTheDocument();
        await act(async () => userEvent.click(button));
        expect(screen.queryByRole('list')).toBeInTheDocument();
        const optionNews = screen.getByText(/Preço: menor maior/i);
        await act(async () => userEvent.click(optionNews));
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
        expect(FiltePriority[currentPriority]).toEqual('MINOR_PRICE');
    });

    it('should click to have filter Mais vendidos', async () => {
        renderWithProvider(<FilterByPriority />);
        const button = screen.getByRole('button', {
            name: /Organizar por/i
        });

        expect(screen.queryByRole('list')).not.toBeInTheDocument();
        await act(async () => userEvent.click(button));
        expect(screen.queryByRole('list')).toBeInTheDocument();
        const optionNews = screen.getByText(/Mais vendidos/i);
        await act(async () => userEvent.click(optionNews));
        expect(screen.queryByRole('list')).not.toBeInTheDocument();
        expect(FiltePriority[currentPriority]).toEqual('POPULARITY');
    });
});
