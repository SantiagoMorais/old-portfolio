import { fireEvent, render, screen } from "@testing-library/react"
import { Header } from "."

describe('<NavBar />', () => {
    it('should render the links of navigation bar', () => {
        render(<Header />)
        const links = screen.getAllByRole("listitem");
        expect(links).toHaveLength(4);
    })

    it("should add the className 'active' to the accordion button when it is clicked", () => {
        render(<Header />)
        const button = screen.getByTestId("accordionButton");
        expect(button).toBeInTheDocument();

        expect(button.classList.contains('active')).toBeFalsy();

        fireEvent.click(button)
        expect(button.classList.contains('active')).toBeTruthy();

        fireEvent.click(button)
        expect(button.classList.contains('active')).toBeFalsy();
    })

    it("should the fontAwesomeIcon changes its icon attribute when the button is clicked", () => {
        render(<Header />)
        
        const button = screen.getByTestId("accordionButton");
        const icon = document.querySelector(".hamburgerIcon");
        expect(icon).toHaveAttribute(`data-icon`, "bars");

        fireEvent.click(button);
        expect(icon).toHaveAttribute(`data-icon`, "xmark");
    })

    it("should the 'About me' button redirect to the 'about-me' section correctly" , () => {
        render(<Header />);
        const aboutMe = screen.getByText(/about me/i)
        expect(aboutMe).toBeInTheDocument();
        expect(aboutMe).toHaveAttribute("href", "#aboutMe")
    })
    
    it("should the 'Skills' button redirect to the 'skills' section correctly" , () => {
        render(<Header />);
        const skills = screen.getByText(/skills/i)
        expect(skills).toBeInTheDocument();
        expect(skills).toHaveAttribute("href", "#skills")
    })

    it("should the 'My projects' button redirect to the 'my-projects' section correctly" , () => {
        render(<Header />);
        const myProjects = screen.getByText(/My projects/i)
        expect(myProjects).toBeInTheDocument();
        expect(myProjects).toHaveAttribute("href", "#myProjects")
    })

    it("should the 'Contacts' button redirect to the 'contacts' section correctly" , () => {
        render(<Header />);
        const contacts = screen.getByText(/contacts/i)
        expect(contacts).toBeInTheDocument();
        expect(contacts).toHaveAttribute("href", "#contacts")
    })
})
