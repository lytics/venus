import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../accordion";

describe("Accordion", () => {
  const renderAccordion = (props: Record<string, unknown> = {}) =>
    render(
      <Accordion type="single" collapsible {...props}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content for section 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content for section 2</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

  it("renders accordion items with triggers", () => {
    renderAccordion();
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
  });

  it("expands content when trigger is clicked", async () => {
    const user = userEvent.setup();
    renderAccordion();

    // Content should be hidden initially
    expect(screen.queryByText("Content for section 1")).not.toBeInTheDocument();

    await user.click(screen.getByText("Section 1"));
    expect(screen.getByText("Content for section 1")).toBeInTheDocument();
  });

  it("type='single' only allows one item open at a time", async () => {
    const user = userEvent.setup();
    renderAccordion({ type: "single", collapsible: true });

    // Open first section
    await user.click(screen.getByText("Section 1"));
    expect(screen.getByText("Content for section 1")).toBeInTheDocument();

    // Open second section — first should close
    await user.click(screen.getByText("Section 2"));
    expect(screen.getByText("Content for section 2")).toBeInTheDocument();
    expect(screen.queryByText("Content for section 1")).not.toBeInTheDocument();
  });

  it("type='multiple' allows multiple items open", async () => {
    const user = userEvent.setup();
    render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    await user.click(screen.getByText("Section 1"));
    await user.click(screen.getByText("Section 2"));

    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("collapsible prop allows closing an open item", async () => {
    const user = userEvent.setup();
    renderAccordion({ type: "single", collapsible: true });

    // Open
    await user.click(screen.getByText("Section 1"));
    expect(screen.getByText("Content for section 1")).toBeInTheDocument();

    // Close by clicking again
    await user.click(screen.getByText("Section 1"));
    expect(screen.queryByText("Content for section 1")).not.toBeInTheDocument();
  });
});
