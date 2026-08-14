import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DemoPlayer } from "@/components/media/demo-player";

describe("DemoPlayer", () => {
  it("loads an external demo only after the visitor requests it", () => {
    render(<DemoPlayer provider="youtube" src="https://example.test/demo" title="Demo" poster="/media/demo.png" />);

    expect(screen.queryByTitle("Demo")).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /play demo/i }));
    expect(screen.getByTitle("Demo")).toHaveAttribute("src", "https://example.test/demo");
  });
});
