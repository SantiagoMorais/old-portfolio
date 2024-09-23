import { render, screen } from "@testing-library/react";
import { AboutMe } from ".";
import curriculum from "@assets/docs/Curriculum-Vitae-Felipe-Santiago-Morais.pdf";

describe("<AboutMe />", () => {
  it("should render the component correctly", () => {
    render(<AboutMe />);
    const title = screen.getByText(/about me/i);
    expect(title).toBeInTheDocument();
  });

  it("should render all abilities of the component", () => {
    render(<AboutMe />);
    const abilities = screen.getAllByRole("listitem");
    expect(abilities).toHaveLength(3);
  });

  it("should render the portfolio download link with correct properties", () => {
    render(<AboutMe />);
    const portfolioLink = screen.getByText(
      "Download my Curriculum Vitae"
    ) as HTMLAnchorElement;

    expect(portfolioLink).toBeInTheDocument();
    expect(portfolioLink).toHaveAttribute(
      "download",
      "Curriculum Vitae - Felipe Santiago Morais"
    );
    expect(portfolioLink).toHaveAttribute("href", `${curriculum}`);
  });
});
