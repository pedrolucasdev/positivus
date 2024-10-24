// tests/workingProcess.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Testimonials Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    const viewport = page.viewportSize();
    // testimonials is not visible on mobile
    if (viewport == null || viewport.width < 1280) {
      test.skip();
    }
  });

  test("should render Testimonials title and description", async ({ page }) => {
    await expect(
      page.locator(".title", { hasText: "Testimonials" })
    ).toBeVisible();

    await expect(
      page.locator(".description", {
        hasText: "Hear from Our Satisfied Clients",
      })
    ).toBeVisible();
  });

  test("should display the first testimonial by default", async ({ page }) => {
    const firstQuote = page.locator(".embla__slide", {
      hasText: "We have been working with Positivus",
    });
    await expect(firstQuote).toBeVisible();

    const firstAuthor = page.locator(".testimonial-author", {
      hasText: "John Doe",
    });
    await expect(firstAuthor).toBeVisible();

    const firstPosition = page.locator(".testimonial-position", {
      hasText: "Marketing Director at XYZ Corp",
    });
    await expect(firstPosition).toBeVisible();
  });

  test("should navigate to next testimonial when clicking Next button", async ({
    page,
  }) => {
    const nextButton = page.locator(".carousel-next-button");

    await nextButton.click();

    const secondQuote = page.locator(".embla__slide", {
      hasText: "Working with this marketing agency",
    });
    await expect(secondQuote).toBeVisible();

    const secondAuthor = page.locator(".testimonial-author", {
      hasText: "Adam Smith",
    });
    await expect(secondAuthor).toBeVisible();

    const secondPosition = page.locator(".testimonial-position", {
      hasText: "Marketing Director at ABC Corp",
    });
    await expect(secondPosition).toBeVisible();
  });

  test("should navigate to previous testimonial when clicking Prev button", async ({
    page,
  }) => {
    const nextButton = page.locator(".carousel-next-button");
    const prevButton = page.locator(".carousel-prev-button");

    await nextButton.click();

    await prevButton.click();

    const firstQuote = page.locator(".embla__slide", {
      hasText: "We have been working with Positivus",
    });
    await expect(firstQuote).toBeVisible();

    const firstAuthor = page.locator(".testimonial-author", {
      hasText: "John Doe",
    });
    await expect(firstAuthor).toBeVisible();
  });

  test("should switch testimonials when clicking star buttons", async ({
    page,
  }) => {
    const starButtons = page.locator(".carousel-star-button");

    await starButtons.nth(1).click();

    const secondQuote = page.locator(".embla__slide", {
      hasText: "Working with this marketing agency",
    });
    await expect(secondQuote).toBeVisible();

    const secondAuthor = page.locator(".testimonial-author", {
      hasText: "Adam Smith",
    });
    await expect(secondAuthor).toBeVisible();
  });

  test("should loop around when next is clicked on last testimonial", async ({
    page,
  }) => {
    const nextButton = page.locator(".carousel-next-button");

    for (let i = 0; i < 4; i++) {
      await nextButton.click();
    }

    const lastQuote = page.locator(".embla__slide", {
      hasText: "The team truly understands our brand",
    });
    await expect(lastQuote).toBeVisible();

    await nextButton.click();

    const firstQuote = page.locator(".embla__slide", {
      hasText: "We have been working with Positivus",
    });
    await expect(firstQuote).toBeVisible();
  });
});
