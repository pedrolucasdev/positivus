import { test, expect } from "@playwright/test";

test.describe("Header Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render the logo", async ({ page }) => {
    await expect(page.locator(".header-logo")).toBeVisible();
  });

  test("should display navigation links", async ({ page }) => {
    const viewport = page.viewportSize();
    if (viewport == null || viewport.width < 768) {
      test.skip();
    }

    await expect(page.locator(".link", { hasText: "About us" })).toBeVisible();
    await expect(page.locator(".link", { hasText: "Services" })).toBeVisible();
    await expect(page.locator(".link", { hasText: "Use Cases" })).toBeVisible();
    await expect(
      page.locator(".link", { hasText: "Request a quote" })
    ).toBeVisible();
  });
});
