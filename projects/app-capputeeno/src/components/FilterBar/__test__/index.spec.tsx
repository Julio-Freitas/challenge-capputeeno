import { renderWithProvider } from '@/utils/tests/helpers';
import { FilterBar } from '..';
import { screen } from '@testing-library/dom';

jest.mock('../filterByType', () => ({
    FilterByType: () => <div data-testid="filterByType" />
}));

jest.mock('../filterByPriority', () => ({
    FilterByPriority: () => <div data-testid="filterByPriority" />
}));

jest.mock('../filterbyPagination', () => ({
    FilterByPagination: () => <div data-testid="filterbyPagination" />
}));

describe('<FilterBar />', () => {
    it('render correctly', () => {
        renderWithProvider(<FilterBar />);

        expect(screen.getByTestId('filterByType')).toBeInTheDocument();
        expect(screen.getByTestId('filterByPriority')).toBeInTheDocument();
        expect(screen.getByTestId('filterbyPagination')).toBeInTheDocument();
    });
});
