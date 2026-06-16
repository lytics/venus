import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../tabs";

describe("Tabs", () => {
  const renderTabs = (defaultValue = "tab1") =>
    render(
      <Tabs defaultValue={defaultValue}>
        <TabsList>
          <TabsTrigger value="tab1">Tab One</TabsTrigger>
          <TabsTrigger value="tab2">Tab Two</TabsTrigger>
          <TabsTrigger value="tab3">Tab Three</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content One</TabsContent>
        <TabsContent value="tab2">Content Two</TabsContent>
        <TabsContent value="tab3">Content Three</TabsContent>
      </Tabs>,
    );

  it("renders TabsList with TabsTrigger buttons", () => {
    renderTabs();
    expect(screen.getByRole("tablist")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tab One" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tab Two" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Tab Three" })).toBeInTheDocument();
  });

  it("shows content for default tab", () => {
    renderTabs("tab1");
    expect(screen.getByText("Content One")).toBeInTheDocument();
  });

  it("does not show non-active tab content", () => {
    renderTabs("tab1");
    expect(screen.queryByText("Content Two")).not.toBeInTheDocument();
    expect(screen.queryByText("Content Three")).not.toBeInTheDocument();
  });

  it("switches content when clicking a different trigger", async () => {
    const user = userEvent.setup();
    renderTabs("tab1");
    expect(screen.getByText("Content One")).toBeInTheDocument();
    await user.click(screen.getByRole("tab", { name: "Tab Two" }));
    expect(screen.getByText("Content Two")).toBeInTheDocument();
    expect(screen.queryByText("Content One")).not.toBeInTheDocument();
  });

  it("uses defaultValue to set initial active tab", () => {
    renderTabs("tab2");
    expect(screen.getByText("Content Two")).toBeInTheDocument();
    expect(screen.queryByText("Content One")).not.toBeInTheDocument();
  });

  it("marks active trigger with data-state=active", () => {
    renderTabs("tab1");
    const tab1 = screen.getByRole("tab", { name: "Tab One" });
    const tab2 = screen.getByRole("tab", { name: "Tab Two" });
    expect(tab1).toHaveAttribute("data-state", "active");
    expect(tab2).toHaveAttribute("data-state", "inactive");
  });

  it("switches data-state when clicking tabs", async () => {
    const user = userEvent.setup();
    renderTabs("tab1");
    const tab1 = screen.getByRole("tab", { name: "Tab One" });
    const tab2 = screen.getByRole("tab", { name: "Tab Two" });
    await user.click(tab2);
    expect(tab2).toHaveAttribute("data-state", "active");
    expect(tab1).toHaveAttribute("data-state", "inactive");
  });
});
