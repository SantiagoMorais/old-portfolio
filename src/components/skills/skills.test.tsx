import { render, screen } from "@testing-library/react";
import { Skills } from ".";

describe("<Skills />", () => {
  it("should render the component correctly", () => {
    render(<Skills />);
    const title = screen.getByText(/skills/i);
    expect(title).toBeInTheDocument();
  });

  it("should render all skills categories", () => {
    render(<Skills />);
    const skills = document.querySelectorAll(".skill");
    expect(skills).toHaveLength(4);
  });

  it("should render the list skills correctly", () => {
    render(<Skills />);
    const skillLists = document.querySelector(".skillLists");
    expect(skillLists).toBeInTheDocument();
    expect(skillLists).matchSnapshot();
  });
});
