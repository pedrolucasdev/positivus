import { test, expect } from "@playwright/test";

test.describe("CallToAction Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render the call to action", async ({ page }) => {
    await expect(
      page.locator(".call-to-action", {
        hasText: " Contact us today to learn more",
      })
    ).toBeVisible();
  });
});
