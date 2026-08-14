import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SelectedWork } from "@/components/home/selected-work";

describe("SelectedWork", () => {
  it("shows two linked case studies with honest evidence labels", () => {
    render(<SelectedWork />);

    expect(screen.getAllByText("Solution demonstration")).toHaveLength(2);
    expect(screen.getByText("Workflow demonstration")).toBeVisible();
    expect(screen.getAllByRole("link", { name: "Read case study" })).toHaveLength(2);
  });
});
