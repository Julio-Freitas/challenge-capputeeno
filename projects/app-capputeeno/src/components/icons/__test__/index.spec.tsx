import { DeleteIcon } from '../delete-icon';
import { GitHubIcon } from '../github-icon';
import { renderWithProvider } from '@/utils/tests/helpers';

describe('<Gihub', () => {
    it('should render github icon', () => {
        const { container } = renderWithProvider(<GitHubIcon />);
        expect(container.firstElementChild).toMatchSnapshot();
    });
    it('should render delete icon', () => {
        const { container } = renderWithProvider(<DeleteIcon />);
        expect(container.firstElementChild).toMatchSnapshot();
    });
});
