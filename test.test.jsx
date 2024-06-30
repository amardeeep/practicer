import { render, screen } from "@testing-library/react";

import App from "./src/App";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("App Component", () => {
  it("It renders Banana", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("it renders Mango after button click", async () => {
    const user = userEvent.setup();
    render(<App />);
    const button = screen.getByRole("button");
    await user.click(button);
    expect(screen.getByRole("heading").textContent).toMatch(/mango/i);
  });
});

/*describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});*/
