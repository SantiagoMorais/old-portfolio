import { render, screen } from "@testing-library/react";
import { Contacts } from ".";

describe("<Contacts />", () => {
  it("should render the component correctly", () => {
    render(<Contacts />);
    const title = screen.getByText(/Contact me on my social media/i);
    expect(title).toBeInTheDocument();
  });

  it("should render the component correctly", () => {
    render(<Contacts />);
    const socialMidiaLinks = screen.getAllByRole("listitem");
    expect(socialMidiaLinks).toHaveLength(4);
  });

  it("should the links redirect to the correct website", () => {
    render(<Contacts />);
    const socialMidiaList = screen.getByRole("list");
    expect(socialMidiaList).toBeInTheDocument();
    expect(socialMidiaList).toMatchSnapshot();
  });
});
