import {expect, test} from "@playwright/test";

const navLinks = [
    {name: 'Home', url: '#home'},
    {name: 'Portfolio', url: '#projects'},
    {name: 'About', url: '#about'},
    {name: 'Contact', url: '#contact'},
];

test.describe('Header Navigation (Anchors)', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test.describe('Desktop View', () => {
        test.use({viewport: {width: 1280, height: 720}});

        for (const linkData of navLinks) {
            test(`should scroll to ${linkData.name} section`, async ({page}) => {
                const navLink = page.getByRole('link', {name: linkData.name});
                const section = page.locator(linkData.url);

                await navLink.click();
                await expect(page).toHaveURL(new RegExp(linkData.url + '$'));
                await expect(section).toBeInViewport();
            });
        }
    });

    test.describe('Mobile View', () => {
        test.use({viewport: {width: 375, height: 667}});

        for (const linkData of navLinks) {
            test(`should navigate to ${linkData.name} via burger menu`, async ({page}) => {
                const menuButton = page.locator('button.md\\:hidden');
                const mobileMenu = page.locator('div.fixed.top-0.w-full');

                await menuButton.click();
                await expect(mobileMenu).toBeVisible();

                const navLink = page.getByRole('link', {name: linkData.name});
                const section = page.locator(linkData.url);

                await navLink.click();

                await expect(page).toHaveURL(new RegExp(linkData.url + '$'));
                await expect(mobileMenu).toBeHidden();
                await expect(section).toBeInViewport();
            });
        }
    });
});