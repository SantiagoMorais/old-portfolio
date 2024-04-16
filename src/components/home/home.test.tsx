import { render, screen } from "@testing-library/react"
import { AboutMe } from "@components/about"

describe('<Home />', () => {
    it('should render the component correctly', () => {
        render(<AboutMe />)
        const title = screen.getByText(/about me/i);
        expect(title).toBeInTheDocument();
    })

    it('should render the component correctly', () => {
        render(<AboutMe />)
        const title = screen.getByText(/about me/i);
        expect(title).toBeInTheDocument();
    })

    it('should render all abilities correctly', () => {
        render(<AboutMe />)
        const abilities = screen.getAllByRole("listitem")
        expect(abilities).toHaveLength(3);
    })
})