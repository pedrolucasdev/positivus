// tests/workingProcess.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Working Process Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render all steps with correct titles and icons", async ({
    page,
  }) => {
    const steps = [
      { step: "01", title: "Consultation" },
      { step: "02", title: "Research and Strategy Development" },
      { step: "03", title: "Implementation" },
      { step: "04", title: "Monitoring and Optimization" },
      { step: "05", title: "Reporting and Communication" },
      { step: "06", title: "Continual Improvement" },
    ];

    for (const { step, title } of steps) {
      await expect(page.locator(".step", { hasText: step })).toBeVisible();
      await expect(page.locator(".title", { hasText: title })).toBeVisible();
    }
  });

  test("should expand and collapse the step description when clicked", async ({
    page,
  }) => {
    const step = "01";
    const description = "During the initial consultation";

    await page.locator(".step", { hasText: step }).click();

    await expect(
      page.locator(".description", { hasText: description })
    ).toBeVisible();

    await page.locator(".step", { hasText: step }).click();

    await expect(
      page.locator(".description", { hasText: description })
    ).not.toBeVisible();
  });

  test("should only have one step expanded at a time", async ({ page }) => {
    await page.locator(".step", { hasText: "01" }).click();

    await expect(
      page.locator(".title", { hasText: "Consultation" })
    ).toBeVisible();

    await page.locator(".step", { hasText: "02" }).click();

    await expect(
      page.locator(".description", {
        hasText: "Research and strategy development",
      })
    ).toBeVisible();

    await expect(
      page.locator(".description", {
        hasText: "During the initial consultation",
      })
    ).not.toBeVisible();

    await expect(
      page.locator(".description", { hasText: "Our implementation services" })
    ).not.toBeVisible();
  });
});
