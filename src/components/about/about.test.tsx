import { render, screen } from "@testing-library/react"
import { AboutMe } from "."

describe("<AboutMe />", () => {
    it("should render the component correctly", () => {
        render(<AboutMe />);
        const title = screen.getByText(/about me/i);
        expect(title).toBeInTheDocument();
    });

    it("should the button open the curriculum", () => {
        render(<AboutMe />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();

        // We have to complete this test when the curriculum be completed
    })

    it("should render all abilities of the component", () => {
        render(<AboutMe />)
        const abilities = screen.getAllByRole("listitem");
        expect(abilities).toHaveLength(3);
    })
})