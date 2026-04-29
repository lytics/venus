import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Toggle } from "../toggle";

describe("Toggle", () => {
  it("renders with label", () => {
    render(<Toggle label="Enable notifications" />);
    expect(screen.getByText("Enable notifications")).toBeInTheDocument();
  });

  it("renders without label", () => {
    render(<Toggle data-testid="toggle-input" />);
    expect(screen.getByTestId("toggle-input")).toBeInTheDocument();
  });

  it("renders as a checkbox input", () => {
    render(<Toggle data-testid="toggle-input" />);
    const input = screen.getByTestId("toggle-input");
    expect(input.tagName).toBe("INPUT");
    expect(input).toHaveAttribute("type", "checkbox");
  });

  it("supports controlled checked state", () => {
    const onChange = vi.fn();
    render(<Toggle checked={true} onChange={onChange} label="On" />);
    const input = screen.getByRole("checkbox");
    expect(input).toBeChecked();
  });

  it("fires onChange on click", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Toggle onChange={onChange} label="Toggle me" />);
    await user.click(screen.getByRole("checkbox"));
    expect(onChange).toHaveBeenCalled();
  });

  it("supports defaultChecked for uncontrolled usage", () => {
    render(<Toggle defaultChecked label="Default on" />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("is not checked by default", () => {
    render(<Toggle label="Off by default" />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Toggle disabled label="Disabled toggle" />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("does not change when disabled and clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Toggle disabled onChange={onChange} label="Disabled" />);
    await user.click(screen.getByRole("checkbox"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("forwards ref", () => {
    const ref = vi.fn();
    render(<Toggle ref={ref} />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });
});
