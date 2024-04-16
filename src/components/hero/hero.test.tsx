import { render, screen } from "@testing-library/react"
import { Hero } from "."
import heroImage from "@assets/felipe-image.png"

describe("<Hero />", () => {
    it('should render the component', () => {
        render(<Hero />);
        const title = screen.getByText("Felipe Santiago");
        expect(title).toBeInTheDocument();
    })

    it('should render the image correctly', () => {
        render(<Hero />);
        const image = screen.getByRole("img");
        expect(image).toHaveAttribute("src", heroImage);
    })

    it('should render all the programming languages icons', () => {
        render(<Hero />)
        const progLanguages = screen.getAllByRole('listitem')
        expect(progLanguages).toHaveLength(5)
    })

    it("should the 'projects' link redirect to the 'my-projects' section" , () => {
        render(<Hero />);
        const projects = screen.getByText("projects")
        expect(projects).toBeInTheDocument();
        expect(projects).toHaveAttribute("href", "#my-projects")
    })

    it("should the 'contact' link redirect to the 'contacts' section" , () => {
        render(<Hero />);
        const contact = screen.getByText("contact")
        expect(contact).toBeInTheDocument();
        expect(contact).toHaveAttribute("href", "#contacts")
    })
})