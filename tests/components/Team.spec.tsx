import { test, expect } from "@playwright/test";

test.describe("Team Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render Team title and description", async ({ page }) => {
    await expect(page.locator(".title", { hasText: "Team" })).toBeVisible();

    await expect(
      page.locator(".description", {
        hasText:
          "Meet the skilled and experienced team behind our successful digital marketing strategies",
      })
    ).toBeVisible();
  });

  test("should display the first team member's details", async ({ page }) => {
    const firstMemberName = page.locator(".team-member", {
      hasText: "John Smith",
    });
    await expect(firstMemberName).toBeVisible();

    const firstMemberPosition = page.locator(".team-member", {
      hasText: "CEO and Founder",
    });
    await expect(firstMemberPosition).toBeVisible();

    const firstMemberDescription = page.locator(".team-member", {
      hasText:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    });
    await expect(firstMemberDescription).toBeVisible();
  });
});
