import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "../card";

describe("Card", () => {
  it("renders with children", () => {
    render(<Card>Card content here</Card>);
    expect(screen.getByText("Card content here")).toBeInTheDocument();
  });

  it("renders with data-slot attribute", () => {
    render(<Card>Hello</Card>);
    expect(screen.getByText("Hello").closest("[data-slot='card']")).toBeInTheDocument();
  });

  it("renders CardHeader", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>My Title</CardTitle>
        </CardHeader>
      </Card>,
    );
    expect(screen.getByText("My Title")).toBeInTheDocument();
  });

  it("renders CardTitle", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
      </Card>,
    );
    const title = screen.getByText("Card Title");
    expect(title).toBeInTheDocument();
    expect(title.closest("[data-slot='card-title']")).toBeInTheDocument();
  });

  it("renders CardDescription", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>A helpful description</CardDescription>
        </CardHeader>
      </Card>,
    );
    const desc = screen.getByText("A helpful description");
    expect(desc).toBeInTheDocument();
    expect(desc.closest("[data-slot='card-description']")).toBeInTheDocument();
  });

  it("renders CardContent", () => {
    render(
      <Card>
        <CardContent>Main body content</CardContent>
      </Card>,
    );
    const content = screen.getByText("Main body content");
    expect(content).toBeInTheDocument();
    expect(content.closest("[data-slot='card-content']")).toBeInTheDocument();
  });

  it("renders CardFooter", () => {
    render(
      <Card>
        <CardFooter>
          <button>Save</button>
        </CardFooter>
      </Card>,
    );
    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Save").closest("[data-slot='card-footer']")).toBeInTheDocument();
  });

  it("renders full card composition", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Project Settings</CardTitle>
          <CardDescription>Manage your project configuration</CardDescription>
          <CardAction>
            <button>Edit</button>
          </CardAction>
        </CardHeader>
        <CardContent>Settings form goes here</CardContent>
        <CardFooter>
          <button>Cancel</button>
          <button>Save</button>
        </CardFooter>
      </Card>,
    );

    expect(screen.getByText("Project Settings")).toBeInTheDocument();
    expect(screen.getByText("Manage your project configuration")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Settings form goes here")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Save")).toBeInTheDocument();
  });
});
