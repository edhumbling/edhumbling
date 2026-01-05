import { render, screen } from '@testing-library/react';
import ProjectsPage from '@/app/projects/page';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { BaseProvider, LightTheme } from 'baseui';

const engine = new Styletron();

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>{children}</BaseProvider>
    </StyletronProvider>
);

// Mock Next.js Image component
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: { src: string; alt: string }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={props.src} alt={props.alt} />
    ),
}));

describe('Projects Page', () => {
    it('renders the page heading', () => {
        render(<ProjectsPage />, { wrapper: Wrapper });

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Deployed Projects');
    });

    it('renders all three projects', () => {
        render(<ProjectsPage />, { wrapper: Wrapper });

        expect(screen.getByText('Bibinii Farms')).toBeInTheDocument();
        expect(screen.getByText('Phages and Biomes')).toBeInTheDocument();
        expect(screen.getByText('St. Louis Demo JHS')).toBeInTheDocument();
    });

    it('renders project IDs', () => {
        render(<ProjectsPage />, { wrapper: Wrapper });

        expect(screen.getByText('ID: P-01')).toBeInTheDocument();
        expect(screen.getByText('ID: P-02')).toBeInTheDocument();
        expect(screen.getByText('ID: P-03')).toBeInTheDocument();
    });

    it('renders project URLs', () => {
        render(<ProjectsPage />, { wrapper: Wrapper });

        expect(screen.getByText('bibiniifarms.com')).toBeInTheDocument();
        expect(screen.getByText('phagesandbiomes.com')).toBeInTheDocument();
        expect(screen.getByText('stlouisdemojhs.com')).toBeInTheDocument();
    });

    it('renders project links that open in new tab', () => {
        render(<ProjectsPage />, { wrapper: Wrapper });

        const links = screen.getAllByRole('link');
        links.forEach((link) => {
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });

    it('renders project thumbnails', () => {
        render(<ProjectsPage />, { wrapper: Wrapper });

        expect(screen.getByAltText('Screenshot of Bibinii Farms')).toBeInTheDocument();
        expect(screen.getByAltText('Screenshot of Phages and Biomes')).toBeInTheDocument();
        expect(screen.getByAltText('Screenshot of St. Louis Demo JHS')).toBeInTheDocument();
    });
});
