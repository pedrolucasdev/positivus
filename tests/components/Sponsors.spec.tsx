import { test, expect } from "@playwright/test";

test.describe("Sponsors Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render all sponsor logos", async ({ page }) => {
    const sponsors = [
      "Amazon",
      "Dribble",
      "Hubspot",
      "Notion",
      "Netflix",
      "Zoom",
    ];

    for (const sponsor of sponsors) {
      await expect(page.locator(`img[alt="${sponsor}"]`)).toBeVisible();
    }
  });
});
