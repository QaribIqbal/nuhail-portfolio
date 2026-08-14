import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";
import { IntentProvider } from "@/components/site/intent-provider";

describe("home page", () => {
  it("introduces Nuhail as an AI automation engineer", () => {
    render(
      <IntentProvider>
        <Home />
      </IntentProvider>,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "I turn repetitive work into systems that think, route, and act.",
      }),
    ).toBeVisible();
    expect(screen.getByText("AI Automation Engineer")).toBeVisible();
    expect(screen.getByRole("img", { name: /abstract automation network/i })).toBeVisible();
    expect(screen.getByRole("img", { name: /real-estate automation workflow/i })).toBeVisible();
    expect(screen.getByRole("img", { name: /agency reporting workflow/i })).toBeVisible();
  });
});
