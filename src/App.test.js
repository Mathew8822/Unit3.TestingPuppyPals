/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("App component", () => {
  test("displays the details of a featured puppy when clicked", () => {
    // Render the App component
    render(<App />);

    // Find the puppy with name "Sir Waggington"
    const puppyName = screen.getByText("Sir Waggington");

    // Simulate a click on the puppy
    fireEvent.click(puppyName);

    // Assert that the featured puppy's name is displayed
    const featuredPuppyName = screen.getByRole("heading", {
      name: /Sir Waggington/i,
    });
    expect(featuredPuppyName).toBeInTheDocument();

    // Assert that the featured puppy's age is displayed
    const featuredPuppyAge = screen.getByText(/Age: \d+/);
    expect(featuredPuppyAge).toBeInTheDocument();

    // Assert that the featured puppy's email is displayed
    const featuredPuppyEmail = screen.getByText(/Email: \S+/);
    expect(featuredPuppyEmail).toBeInTheDocument();
  });

  // TODO
  test("does not display the details of a featured puppy initially", () => {
    render(<App />);// Render the App component
    const featuredPuppyName = screen.queryByRole ("heading", {
      name: /Sir Waggington/i,
    });
    expect(featuredPuppyName).not.toBeInTheDocument();// Assert that the featured puppy's name is not displayed
    const featuredPuppyAge = screen.queryByRole ("heading", {
      name: /10/i,
    });
    expect(featuredPuppyAge).not.toBeInTheDocument();// Assert that the featured puppy's age is not displayed
    expect(featuredPuppyName).not.toBeInTheDocument();// Assert that the featured puppy's name is not displayed
    const featuredPuppyEmail = screen.queryByRole ("heading", {
      name: /woof@gmail.com/i,
    });
    expect(featuredPuppyEmail).not.toBeInTheDocument();// Assert that the featured puppy's email is not displayed
  });

  // TODO
  test("does not change the featured puppy when the same puppy is clicked twice", () => {
    const { getByText } = render(<App />)// Render the App component
    const puppyOne = getByText("Sir Waggington")// Find the puppy with name "Sir Waggington"
    fireEvent.click(puppyOne);// Simulate a click on the puppy
    expect(puppyOne.textContent).toBe("Sir Waggington")// Assert that the initial featured puppy's name is displayed
    fireEvent.click(puppyOne)// Simulate another click on the same puppy
    expect(puppyOne.textContent).toBe("Sir Waggington")// Assert that the featured puppy's name is still displayed and is the same as the initial featured puppy
  });

  // TODO
  test("displays the details of a featured puppy when clicked", () => {
    const { getByText } = render(<App />)// Render the App component
    const puppyTwo = getByText("Miss Furbulous")// Find the puppy with name "Miss Furbulous"
    fireEvent.click(puppyTwo);// Simulate a click on the puppy
    expect(puppyTwo.textContent).toBe("Miss Furbulous") // Assert that the featured puppy's name is displayed
    const featuredPuppyAge = screen.getByRole("heading", {
      name: /Miss Furbulous/i,
    });
    expect(featuredPuppyAge).toBeInTheDocument();// Assert that the featured puppy's age is displayed
    const featuredPuppyEmail = screen.getByRole("heading", {
      name: /Miss Furbulous/i,
    });
    expect(featuredPuppyEmail).toBeInTheDocument() // Assert that the featured puppy's email is displayed
  });
});