import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Input } from "../input";

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("renders as an input element", () => {
    render(<Input data-testid="my-input" />);
    expect(screen.getByTestId("my-input").tagName).toBe("INPUT");
  });

  it("accepts and displays typed value", async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText("Type here");
    await user.type(input, "hello");
    expect(input).toHaveValue("hello");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Input disabled placeholder="Disabled" />);
    expect(screen.getByPlaceholderText("Disabled")).toBeDisabled();
  });

  it("forwards ref", () => {
    const ref = vi.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it("spreads additional props", () => {
    render(<Input data-testid="custom" aria-label="Custom input" />);
    const input = screen.getByTestId("custom");
    expect(input).toHaveAttribute("aria-label", "Custom input");
  });

  it("calls onChange when typing", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Input onChange={onChange} placeholder="Input" />);
    await user.type(screen.getByPlaceholderText("Input"), "a");
    expect(onChange).toHaveBeenCalled();
  });

  it("renders with error state", () => {
    render(<Input error data-testid="error-input" />);
    // Error state applies CSS classes — we just verify the component renders without crashing
    expect(screen.getByTestId("error-input")).toBeInTheDocument();
  });

  it("renders with success state", () => {
    render(<Input success data-testid="success-input" />);
    expect(screen.getByTestId("success-input")).toBeInTheDocument();
  });
});
