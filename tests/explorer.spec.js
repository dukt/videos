const {test, expect} = require('@playwright/test');
const {goToSingleVideoPage, openExplorer} = require('./utils')

test.beforeEach(async ({page, baseURL}) => {
  await goToSingleVideoPage(baseURL, page)
  await openExplorer(baseURL, page)
})

test('Show the explorer', async ({ page }) => {
  const explorerVideosModal = page.locator('.videoselectormodal')
  await expect(explorerVideosModal).toBeVisible();
});

test('Show videos', async ({ page }) => {
  // Check that there is at least one video
  const length = await page.locator('.videoselectormodal .videos-thumb').count();
  expect((length > 0)).toBeTruthy();
});

test('Search videos', async ({ page }) => {
  // Search for “space” videos
  await page.fill('.videoselectormodal input[type=search]', 'space');
  await page.waitForResponse(response => {
    return (
      response.url().includes(encodeURIComponent('actions/videos/explorer/get-videos'))
    )
  })

  // Check that there is at least one video
  const length = await page.locator('.videoselectormodal .videos-thumb').count();
  expect((length > 0)).toBeTruthy();
});
