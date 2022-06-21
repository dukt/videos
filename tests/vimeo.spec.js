const {test, expect} = require('@playwright/test');
const {goToSingleVideoPage, openExplorer} = require('./utils')

test('Browse Vimeo uploads', async ({ page, context, baseURL }) => {
  await goToSingleVideoPage(baseURL, page)
  await openExplorer(baseURL, page)

  // Check that the Vimeo gateway is selected
  const gatewayHandle = await page.inputValue('.videoselectormodal .sidebar select');
  expect(('vimeo' === gatewayHandle)).toBeTruthy();

  // Check that the Uploads nav is selected
  const selectedNav = page.locator('.videoselectormodal .sidebar nav a.sel');
  await expect(selectedNav).toContainText('Uploads');
});

test('Browse Vimeo likes', async ({ page, context, baseURL }) => {
  await goToSingleVideoPage(baseURL, page)
  await openExplorer(baseURL, page)

  // Check that the Vimeo gateway is selected
  const gatewayHandle = await page.inputValue('.videoselectormodal .sidebar select');
  expect(('vimeo' === gatewayHandle)).toBeTruthy();

  // Click the Likes nav item
  await page.locator('.videoselectormodal .sidebar nav a:has-text("Likes")').click();

  // Wait for the likes request to be done
  await page.waitForResponse(response => {
    return (
      response.url().includes(encodeURIComponent('actions/videos/explorer/get-videos'))
    )
  })

  // Check that there is at least one video
  const length = await page.locator('.videoselectormodal .videos-thumb').count();
  expect((length > 0)).toBeTruthy();
});