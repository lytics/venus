import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "../checkbox";

describe("Checkbox", () => {
  it("renders with label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("renders a checkbox input", () => {
    render(<Checkbox label="Check" />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("toggles checked state on click", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Toggle me" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("supports defaultChecked", () => {
    render(<Checkbox defaultChecked label="Pre-checked" />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Checkbox disabled label="Disabled" />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("does not toggle when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox disabled onChange={onChange} label="No toggle" />);
    await user.click(screen.getByRole("checkbox"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("calls onChange when clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox onChange={onChange} label="Clickable" />);
    await user.click(screen.getByRole("checkbox"));
    expect(onChange).toHaveBeenCalled();
  });

  it("forwards ref", () => {
    const ref = vi.fn();
    render(<Checkbox ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it("renders without label", () => {
    render(<Checkbox data-testid="no-label" />);
    expect(screen.getByTestId("no-label")).toBeInTheDocument();
  });
});
