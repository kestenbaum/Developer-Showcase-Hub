import {expect, test} from "@playwright/test";

test.describe('basic portfolio tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    })

    test('Page should load and show main heading', async ({page}) => {
        const heading = page.locator('h1');
        await expect(heading).toBeVisible();
        await expect(heading).not.toBeEmpty();
    });

    test('Footer should have correct social links', async ({page}) => {
        const githubLink = page.locator('a[href*="github.com"]');
        await expect(githubLink).toBeVisible();
    });
})