const {test, expect} = require('@playwright/test');
const {goToSingleVideoPage, openExplorer} = require('./utils')

const selectYoutubeGateway = async (page) => {
  // Check if the YouTube gateway is already selected
  const gatewayHandle = await page.inputValue('.videoselectormodal .sidebar select');

  if (gatewayHandle !== 'youtube') {
    // Select the YouTube gateway
    await page.selectOption('.videoselectormodal .sidebar select', 'youtube')

    // Select Uploads
    await page.locator('.videoselectormodal .sidebar nav a:has-text("Uploads")').click()

    // Wait for videos
    await page.waitForResponse(response => {
      return (
        response.url().includes(encodeURIComponent('actions/videos/explorer/get-videos'))
      )
    })
  }
}

test('Browse YouTube uploads', async ({ page, context, baseURL }) => {
  await goToSingleVideoPage(baseURL, page)
  await openExplorer(baseURL, page)
  await selectYoutubeGateway(page)

  // Check that the Uploads nav is selected
  const selectedNav = page.locator('.videoselectormodal .sidebar nav a.sel');
  await expect(selectedNav).toContainText('Uploads');

  // Check that there is at least one video
  const length = await page.locator('.videoselectormodal .videos-thumb').count();
  expect((length > 0)).toBeTruthy();
});

test('Browse YouTube like videos', async ({ page, context, baseURL }) => {
  await goToSingleVideoPage(baseURL, page)
  await openExplorer(baseURL, page)
  await selectYoutubeGateway(page)

  // Click the Favorites nav item
  await page.locator('.videoselectormodal .sidebar nav a:has-text("Liked")').click();

  // Wait for the favorites request to be done
  await page.waitForResponse(response => {
    return (
      response.url().includes(encodeURIComponent('actions/videos/explorer/get-videos'))
    )
  })

  // Check that there is at least one video
  const length = await page.locator('.videoselectormodal .videos-thumb').count();
  expect((length > 0)).toBeTruthy();
});