import { test, expect } from "@playwright/test";

test.describe("Footer Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render the logo", async ({ page }) => {
    await expect(page.locator(".footer-logo")).toBeVisible();
  });

  test("should display the mock reference", async ({ page }) => {
    await expect(page.locator(".mock-ref")).toBeVisible();
  });
});
