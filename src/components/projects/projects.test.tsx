import { fireEvent, render, screen } from "@testing-library/react"
import { Projects } from "."

describe("<Projects />", () => {
    it("should render the component correctly", () => {
        render(<Projects />);
        const projects = document.getElementById("myProjects");
        expect(projects).toBeInTheDocument();
    })
    
    it("should render all projects categories", () => {
        render(<Projects />);
        const categoriesList = document.querySelectorAll(".category");
        expect(categoriesList).toHaveLength(6);
    })

    it("should hightlight the button when it is clicked", () => {
        render(<Projects />);
        const testsButton = screen.getByTestId("tests");
        const reactButton = screen.getByTestId("react");
        expect(testsButton).toBeInTheDocument();

        expect(testsButton.classList.contains("selected")).toBeFalsy();
        fireEvent.click(testsButton)
        expect(testsButton.classList.contains("selected")).toBeTruthy();
        fireEvent.click(reactButton)
        expect(testsButton.classList.contains("selected")).toBeFalsy();
        expect(reactButton.classList.contains("selected")).toBeTruthy();
    })
})