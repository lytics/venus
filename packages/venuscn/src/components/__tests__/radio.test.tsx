import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Radio } from "../radio";

describe("Radio", () => {
  it("renders with label", () => {
    render(<Radio label="Option A" name="group" />);
    expect(screen.getByText("Option A")).toBeInTheDocument();
  });

  it("renders a radio input", () => {
    render(<Radio label="Option" name="group" />);
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("groups radios by name", () => {
    render(
      <>
        <Radio label="One" name="fruits" value="one" />
        <Radio label="Two" name="fruits" value="two" />
      </>
    );
    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(2);
    expect(radios[0]).toHaveAttribute("name", "fruits");
    expect(radios[1]).toHaveAttribute("name", "fruits");
  });

  it("supports defaultChecked", () => {
    render(<Radio defaultChecked label="Selected" name="group" />);
    expect(screen.getByRole("radio")).toBeChecked();
  });

  it("is not checked by default", () => {
    render(<Radio label="Unselected" name="group" />);
    expect(screen.getByRole("radio")).not.toBeChecked();
  });

  it("selects radio on click", async () => {
    const user = userEvent.setup();
    render(<Radio label="Click me" name="group" />);
    const radio = screen.getByRole("radio");
    expect(radio).not.toBeChecked();
    await user.click(radio);
    expect(radio).toBeChecked();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Radio disabled label="Disabled" name="group" />);
    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("does not select when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Radio disabled onChange={onChange} label="No select" name="group" />);
    await user.click(screen.getByRole("radio"));
    expect(onChange).not.toHaveBeenCalled();
  });

  it("forwards ref", () => {
    const ref = vi.fn();
    render(<Radio ref={ref} name="group" />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it("renders without label", () => {
    render(<Radio data-testid="no-label" name="group" />);
    expect(screen.getByTestId("no-label")).toBeInTheDocument();
  });
});
