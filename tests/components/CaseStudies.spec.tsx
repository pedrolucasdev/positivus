import { test, expect } from "@playwright/test";

test.describe("CaseStudies Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render the title and description", async ({ page }) => {
    await expect(
      page.locator(".title", { hasText: "Case Studies" })
    ).toBeVisible();
    await expect(
      page.locator(".description", {
        hasText:
          "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies",
      })
    ).toBeVisible();
  });

  test("should display the different case studies", async ({ page }) => {
    await expect(
      page.locator(".case-study", { hasText: "For a local restaurant" })
    ).toBeVisible();
    await expect(
      page.locator(".case-study", { hasText: "For a B2B software company" })
    ).toBeVisible();
    await expect(
      page.locator(".case-study", { hasText: "For a national retail chain" })
    ).toBeVisible();
  });
});
