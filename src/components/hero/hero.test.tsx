import { render, screen } from "@testing-library/react";
import { Hero } from ".";
import heroImage from "@assets/imgs/felipe-image.png";
import { Home } from "@components/home";

describe("<Hero />", () => {
  it("should render the component", () => {
    render(<Hero />);
    const title = screen.getByText("Felipe Santiago");
    expect(title).toBeInTheDocument();
  });

  it("should render the image correctly", () => {
    render(<Hero />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", heroImage);
  });

  it("should render all the programming languages icons", () => {
    render(<Hero />);
    const progLanguages = screen.getAllByRole("listitem");
    expect(progLanguages).toHaveLength(5);
  });

  it("should the 'contacts' link and the 'contacts' component be present in the project", () => {
    render(<Home />);
    const contactLink = screen.getByText("contact");
    const contactSection = document.getElementById("contacts");

    expect(contactLink).toBeInTheDocument();
    expect(contactSection).toBeInTheDocument();
  });

  it("The 'contact' link and the 'contact' component should have the same value for the 'id' and 'href' properties for the link to correctly redirect the user to the component.", () => {
    render(<Home />);
    const theSameId = "contacts";

    const contactLink = screen.getByText("contact");
    const contactSection = document.getElementById("contacts");

    expect(contactLink).toHaveAttribute("href", `#${theSameId}`);
    expect(contactSection).toHaveAttribute("id", theSameId);
  });

  it("should the 'projects' link and the 'myProjects' component be present in the project", () => {
    render(<Home />);
    const projectsLink = screen.getByText("projects");
    const myProjectsLink = document.getElementById("myProjects");

    expect(projectsLink).toBeInTheDocument();
    expect(myProjectsLink).toBeInTheDocument();
  });

  it("The 'projects' link and the 'myProject' component should have the same value for the 'id' and 'href' properties for the link to correctly redirect the user to the component.", () => {
    render(<Home />);
    const theSameId = "myProjects";

    const projectsLink = screen.getByText("projects");
    const myProjectsLink = document.getElementById("myProjects");

    expect(projectsLink).toHaveAttribute("href", `#${theSameId}`);
    expect(myProjectsLink).toHaveAttribute("id", theSameId);
  });
});
