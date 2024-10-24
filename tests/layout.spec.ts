import { test, expect } from "@playwright/test";

test.describe("layout component", () => {
  test("should render correctly with metadata", async ({ page }) => {
    await page.goto("/", {
      waitUntil: "domcontentloaded",
    });
    const title = await page.title();
    expect(title).toBe("Positivus");
    const description = await page.locator('meta[name="description"]');
    expect(await description.getAttribute("content")).toBe(
      "Navigating the digital landscape for success"
    );
  });
});
