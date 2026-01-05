import { render, screen } from '@testing-library/react';
import Home from '@/app/page';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { BaseProvider, LightTheme } from 'baseui';

const engine = new Styletron();

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>{children}</BaseProvider>
    </StyletronProvider>
);

describe('Home Page', () => {
    it('renders the main heading', () => {
        render(<Home />, { wrapper: Wrapper });

        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(<Home />, { wrapper: Wrapper });

        expect(screen.getByText('Log')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Projects')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('renders the Log section', () => {
        render(<Home />, { wrapper: Wrapper });

        expect(screen.getByText('01 // Log')).toBeInTheDocument();
    });

    it('renders the About section', () => {
        render(<Home />, { wrapper: Wrapper });

        expect(screen.getByText('02 // About')).toBeInTheDocument();
    });

    it('renders the footer', () => {
        render(<Home />, { wrapper: Wrapper });

        expect(screen.getByText(/Edhumbling Systems/i)).toBeInTheDocument();
    });
});
