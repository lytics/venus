import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Dropdown } from "../dropdown";

const items = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

describe("Dropdown", () => {
  it("renders with items and shows placeholder", () => {
    render(<Dropdown items={items} placeholder="Pick a fruit" />);
    expect(screen.getByText("Pick a fruit")).toBeInTheDocument();
  });

  it("shows default placeholder when none provided", () => {
    render(<Dropdown items={items} />);
    expect(screen.getByText("Select...")).toBeInTheDocument();
  });

  it("shows selected item label when value is provided", () => {
    render(<Dropdown items={items} value="banana" />);
    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  it("opens dropdown on click and shows items", async () => {
    const user = userEvent.setup();
    render(<Dropdown items={items} placeholder="Pick" />);
    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Cherry")).toBeInTheDocument();
  });

  it("selects item and calls onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Dropdown items={items} onChange={onChange} placeholder="Pick" />);
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByText("Cherry"));
    expect(onChange).toHaveBeenCalledWith("cherry");
  });

  it("closes dropdown after selecting an item", async () => {
    const user = userEvent.setup();
    render(<Dropdown items={items} placeholder="Pick" />);
    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    await user.click(screen.getByText("Apple"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("does not open when disabled", async () => {
    const user = userEvent.setup();
    render(<Dropdown items={items} disabled placeholder="Pick" />);
    await user.click(screen.getByRole("button"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("renders v1 version", () => {
    render(<Dropdown items={items} version="v1" placeholder="V1 Dropdown" />);
    expect(screen.getByText("V1 Dropdown")).toBeInTheDocument();
  });

  it("renders v2 version by default", () => {
    render(<Dropdown items={items} placeholder="V2 Dropdown" />);
    expect(screen.getByText("V2 Dropdown")).toBeInTheDocument();
  });

  it("filters items with search when withSearch is enabled", async () => {
    const user = userEvent.setup();
    render(<Dropdown items={items} withSearch placeholder="Search" />);
    await user.click(screen.getByRole("button"));
    // Search input should appear
    const searchInput = screen.getByPlaceholderText("Search here...");
    expect(searchInput).toBeInTheDocument();
    await user.type(searchInput, "ban");
    // Only Banana should match
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    expect(screen.queryByText("Cherry")).not.toBeInTheDocument();
  });

  it("shows no result message when search has no matches", async () => {
    const user = userEvent.setup();
    render(<Dropdown items={items} withSearch placeholder="Search" />);
    await user.click(screen.getByRole("button"));
    const searchInput = screen.getByPlaceholderText("Search here...");
    await user.type(searchInput, "xyz");
    expect(screen.getByText("No Result Found")).toBeInTheDocument();
  });

  it("sets aria-expanded correctly", async () => {
    const user = userEvent.setup();
    render(<Dropdown items={items} placeholder="Pick" />);
    const trigger = screen.getByRole("button");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });
});
