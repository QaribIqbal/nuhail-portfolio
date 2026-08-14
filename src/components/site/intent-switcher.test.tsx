import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { IntentProvider } from "@/components/site/intent-provider";
import { IntentSwitcher } from "@/components/site/intent-switcher";

describe("IntentSwitcher", () => {
  it("starts in hiring mode and updates the shareable query", async () => {
    const replaceState = vi.spyOn(window.history, "replaceState");
    const user = userEvent.setup();

    render(
      <IntentProvider>
        <IntentSwitcher />
      </IntentProvider>,
    );

    expect(screen.getByRole("button", { name: "Hiring talent" })).toHaveAttribute("aria-pressed", "true");
    await user.click(screen.getByRole("button", { name: "Need automation" }));
    expect(screen.getByRole("button", { name: "Need automation" })).toHaveAttribute("aria-pressed", "true");
    expect(replaceState).toHaveBeenCalled();
  });
});
