import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Pagination } from "../pagination";

describe("Pagination", () => {
  it("renders page numbers", () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByRole("button", { name: `Page ${i}` })).toBeInTheDocument();
    }
  });

  it("highlights the current page with aria-current", () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={() => {}} />);
    const currentBtn = screen.getByRole("button", { name: "Page 3" });
    expect(currentBtn).toHaveAttribute("aria-current", "page");

    // Other buttons should not have aria-current
    const otherBtn = screen.getByRole("button", { name: "Page 1" });
    expect(otherBtn).not.toHaveAttribute("aria-current");
  });

  it("calls onPageChange with the clicked page number", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Pagination currentPage={1} totalPages={5} onPageChange={handleChange} />);

    await user.click(screen.getByRole("button", { name: "Page 3" }));
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  it("previous button calls onPageChange with currentPage - 1", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Pagination currentPage={3} totalPages={5} onPageChange={handleChange} />);

    await user.click(screen.getByRole("button", { name: "Previous page" }));
    expect(handleChange).toHaveBeenCalledWith(2);
  });

  it("next button calls onPageChange with currentPage + 1", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Pagination currentPage={3} totalPages={5} onPageChange={handleChange} />);

    await user.click(screen.getByRole("button", { name: "Next page" }));
    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it("disables previous button on first page", () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Previous page" })).toBeDisabled();
  });

  it("disables next button on last page", () => {
    render(<Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Next page" })).toBeDisabled();
  });

  it("shows ellipsis for large page counts", () => {
    render(<Pagination currentPage={5} totalPages={10} onPageChange={() => {}} />);
    // With 10 pages at page 5, should show ellipsis
    const nav = screen.getByRole("navigation", { name: "Pagination" });
    expect(nav).toBeInTheDocument();
    // Page 1 and page 10 should always be visible
    expect(screen.getByRole("button", { name: "Page 1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Page 10" })).toBeInTheDocument();
  });
});
