import { render, screen } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom';

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of myself with appropriate alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", expect.stringContaining("http"));
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    level: 2,
    name: /about me/i,
  });
  expect(heading).toBeInTheDocument();
});

test("displays a paragraph with a short biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/software developer|react/i);
  expect(paragraph).toBeInTheDocument();
});

test("displays a link to my GitHub profile", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

test("displays a link to my LinkedIn profile", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
