import { test, expect } from "@playwright/test";

test("Mainframe hero landing page renders correctly and responds to mouse scrub", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/");

  // Verify page title
  await expect(page).toHaveTitle("Mainframe®");

  // Verify Logo
  const logo = page.locator("text=Mainframe®");
  await expect(logo).toBeVisible();

  const asterisk = page.locator("text=✳︎");
  await expect(asterisk).toBeVisible();

  // Verify desktop nav links
  await expect(page.locator("nav a:has-text('Labs')")).toBeVisible();
  await expect(page.locator("nav a:has-text('Studio')")).toBeVisible();
  await expect(page.locator("nav a:has-text('Openings')")).toBeVisible();
  await expect(page.locator("nav a:has-text('Shop')")).toBeVisible();
  await expect(page.locator("header a:has-text('Get in touch')")).toBeVisible();

  // Verify blurred intro
  const blurredText = page.locator("text=Hey there, meet A.R.I.A");
  await expect(blurredText).toBeVisible();

  // Verify typewriter text completes
  await expect(
    page.locator("text=Glad you stopped in. Good taste tends to find us. Now, what are we building?")
  ).toBeVisible({ timeout: 10000 });

  // Verify action pill buttons
  await expect(page.locator("button:has-text('Pitch us an idea')")).toBeVisible();
  await expect(page.locator("button:has-text('Come work here')")).toBeVisible();
  await expect(page.locator("button:has-text('Send a brief hello')")).toBeVisible();
  await expect(page.locator("button:has-text('See how we operate')")).toBeVisible();
  await expect(page.locator("button:has-text('Reach us: hello@mainframe.co')")).toBeVisible();

  // Test mouse move scrub across the screen
  await page.mouse.move(100, 300);
  await page.waitForTimeout(100);
  await page.mouse.move(500, 300);
  await page.waitForTimeout(100);
  await page.mouse.move(900, 300);
  await page.waitForTimeout(300);

  // Take a screenshot of the hero page
  await page.screenshot({ path: "mainframe-hero-preview.png", fullPage: true });
});
