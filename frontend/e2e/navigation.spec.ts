import { expect, test } from "@playwright/test";

const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
];

test.describe('header desktop navigation test', async () => {
    test.use({ viewport: { width: 1280, height: 720 } });
    test('logo should be displayed', async ({ page }) => {
        await page.goto('/')
        const logo = page.getByRole('link', { name: 'Developer Showcase' });
        await expect(logo).toBeVisible();
    })

    for (const linkData of navLinks) {
        test(`should navigate to ${linkData.name} page`, async ({ page }) => {
            await page.goto('/');

            const navLink = page.getByRole('link', { name: linkData.name });
            await expect(navLink).toBeVisible();

            await navLink.click();
            await expect(page).toHaveURL(new RegExp(linkData.url));
        });
    }
})

test.describe('Header Mobile Navigation Tests (Refactored)', () => {
    test.use({ viewport: { width: 365, height: 667 } });

    for (const linkData of navLinks) {
        test(`should navigate to ${linkData.name} page via burger menu`, async ({ page }) => {
            await page.goto('/');

            const menuButton = page.locator('button.md\\:hidden');
            const mobileMenuContainer = page.locator('div.fixed.top-0.w-full');

            await menuButton.click();
            await expect(mobileMenuContainer).toBeVisible();

            const navLink = page.getByRole('link', { name: linkData.name });
            await navLink.click();

            await expect(page).toHaveURL(linkData.url);
            await expect(mobileMenuContainer).toBeHidden();
        });
    }

    test('should open and close menu without navigation', async ({ page }) => {
        await page.goto('/');
        const menuButton = page.locator('button.md\\:hidden');
        const mobileMenuContainer = page.locator('div.fixed.top-0.w-full');

        await menuButton.click();
        await expect(mobileMenuContainer).toBeVisible();

        await menuButton.click();
        await expect(mobileMenuContainer).toBeHidden();
    });
});
