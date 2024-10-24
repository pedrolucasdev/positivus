import { test, expect } from "@playwright/test";

test.describe("Hero Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render Hero title, description, image and action ", async ({
    page,
  }) => {
    await expect(
      page.locator(".hero-title", {
        hasText: "Navigating the digital landscape for success",
      })
    ).toBeVisible();

    await expect(
      page.locator(".hero-description", {
        hasText:
          "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
      })
    ).toBeVisible();

    const viewport = page.viewportSize();

    if (viewport != null && viewport.width > 768) {
      await expect(page.locator(".hero-image")).toBeVisible();
    } else {
      await expect(page.locator(".hero-mobile-image")).toBeVisible();
    }

    await expect(page.locator(".hero-action")).toBeVisible();
  });
});
