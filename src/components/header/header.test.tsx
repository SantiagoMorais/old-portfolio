import { fireEvent, render, screen } from "@testing-library/react"
import { Header } from "."

describe('<NavBar />', () => {
    it('should render the links of navigation bar', () => {
        render(<Header />)
        const links = screen.getAllByRole("listitem");
        expect(links).toHaveLength(3);
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
})
