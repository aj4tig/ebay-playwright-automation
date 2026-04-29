import { test, expect } from '@playwright/test';

test('Verify eBay search functionality', async ({ page }) => {
  // Go to eBay
  await page.goto('https://www.ebay.com.au/');

  // Type into the search bar
  const searchBar = page.getByPlaceholder('Search for anything');
  await searchBar.fill('Himalayan 450');

  // Click Search
  await page.getByRole('button', { name: 'Search', exact: true }).click();

  // Verify the results page loaded
  await expect(page).toHaveTitle(/Himalayan 450/);
  
  console.log('Success! eBay search worked.');
});