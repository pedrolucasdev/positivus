import { test, expect } from "@playwright/test";

test.describe("Services Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render Services title and description", async ({ page }) => {
    await expect(page.locator(".title", { hasText: "Services" })).toBeVisible();

    await expect(
      page.locator(".description", {
        hasText:
          "At our digital marketing agency, we offer a range of services",
      })
    ).toBeVisible();
  });

  test("should render the first service", async ({ page }) => {
    const firstService = page.locator(".serviceTitle", {
      hasText: "Search engine",
    });
    await expect(firstService).toBeVisible();
  });
});
