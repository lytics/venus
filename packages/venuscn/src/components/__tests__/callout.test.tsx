import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Callout } from "../callout";

describe("Callout", () => {
  it("renders with info variant by default", () => {
    render(<Callout description="Default callout" />);
    expect(screen.getByText("Default callout")).toBeInTheDocument();
    expect(screen.getByRole("note")).toBeInTheDocument();
  });

  it("renders title and description", () => {
    render(<Callout title="Heads up" description="Something happened" />);
    expect(screen.getByText("Heads up")).toBeInTheDocument();
    expect(screen.getByText("Something happened")).toBeInTheDocument();
  });

  it("renders all 4 variants without error", () => {
    const variants = ["info", "warning", "success", "danger"] as const;
    for (const variant of variants) {
      const { unmount } = render(
        <Callout variant={variant} description={`${variant} callout`} />
      );
      expect(screen.getByText(`${variant} callout`)).toBeInTheDocument();
      unmount();
    }
  });

  it("renders children content", () => {
    render(
      <Callout>
        <span>Custom child content</span>
      </Callout>
    );
    expect(screen.getByText("Custom child content")).toBeInTheDocument();
  });

  it("does not show dismiss button by default", () => {
    render(<Callout description="Not dismissible" />);
    expect(screen.queryByRole("button", { name: /dismiss/i })).not.toBeInTheDocument();
  });

  it("shows dismiss button when dismissible is true", () => {
    render(<Callout description="Dismissible" dismissible />);
    expect(screen.getByRole("button", { name: /dismiss/i })).toBeInTheDocument();
  });

  it("calls onDismiss when dismiss button is clicked", async () => {
    const user = userEvent.setup();
    const handleDismiss = vi.fn();
    render(
      <Callout description="Dismiss me" dismissible onDismiss={handleDismiss} />
    );

    await user.click(screen.getByRole("button", { name: /dismiss/i }));
    expect(handleDismiss).toHaveBeenCalledTimes(1);
  });
});
