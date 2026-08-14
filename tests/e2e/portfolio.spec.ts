import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("the home page communicates both hiring and project paths", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("I turn repetitive work into systems");
  await expect(page.getByRole("link", { name: "Read case study" })).toHaveCount(2);

  await page.getByRole("button", { name: "Need automation" }).click();
  await expect(page).toHaveURL(/intent=project/);
  await expect(page.getByText("For agencies and teams replacing repetitive operational work.")).toBeVisible();
});

test("case studies expose evidence boundaries and source links", async ({ page }) => {
  await page.goto("/work/real-estate-lead-response");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("AI Lead Response for Real Estate");
  await expect(page.getByRole("heading", { name: "Potential impact — not a claimed client result." })).toBeVisible();
  await expect(page.getByRole("link", { name: "Read the original real-estate case study" })).toBeVisible();
});

test("the mobile navigation exposes the portfolio sections", async ({ page, isMobile }) => {
  test.skip(!isMobile, "This interaction is specific to the compact navigation.");
  await page.goto("/");

  await page.getByRole("button", { name: "Toggle navigation" }).click();
  await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
  await page.getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL(/#contact$/);
});

test("the home page has no serious or critical accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  const materialViolations = results.violations.filter((violation) => ["serious", "critical"].includes(violation.impact ?? ""));
  expect(materialViolations).toEqual([]);
});
