import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableActionButton,
} from "../table";

describe("Table", () => {
  it("renders a full table with header, body, row, and cells", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alice</TableCell>
            <TableCell>30</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
  });

  it("renders a table element", () => {
    render(
      <Table data-testid="my-table">
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    // The table itself is inside the wrapper div
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  it("wraps in bordered container when bordered prop is true", () => {
    const { container } = render(
      <Table bordered data-testid="bordered-table">
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    // Bordered wraps in a div with border class
    const outerWrapper = container.firstElementChild as HTMLElement;
    expect(outerWrapper.tagName).toBe("DIV");
    // The bordered wrapper has nested divs
    expect(outerWrapper.querySelector("table")).toBeInTheDocument();
  });

  it("renders without extra wrapper when full prop is true", () => {
    const { container } = render(
      <Table full>
        <TableBody>
          <TableRow>
            <TableCell>Full</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    // Full variant renders table directly, no wrapper div
    expect(container.firstElementChild?.tagName).toBe("TABLE");
  });

  it("renders TableHead as th elements", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );
    expect(screen.getByText("Header").tagName).toBe("TH");
  });

  it("renders TableCell as td elements", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell Value</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText("Cell Value").tagName).toBe("TD");
  });

  it("renders TableActionButton as a button with default aria-label", () => {
    render(<TableActionButton />);
    const button = screen.getByRole("button", { name: "Actions" });
    expect(button).toBeInTheDocument();
  });

  it("renders TableActionButton with custom label", () => {
    render(<TableActionButton label="More options" />);
    expect(screen.getByRole("button", { name: "More options" })).toBeInTheDocument();
  });
});
