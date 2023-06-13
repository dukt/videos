const {expect} = require('@playwright/test');

const goToSingleVideoPage = async (baseURL, page) => {
  await page.goto(baseURL + '/globals/default/singleVideo');
  const title = page.locator('h1');
  await expect(title).toHaveText('Single Video');
}

const openExplorer = async (baseURL, page) => {
  const [response] = await Promise.all([
    // Wait for the initial videos request to be done
    page.waitForResponse(response => {
      return (
        response.url().includes('actions/videos/explorer/get-videos')
      )
    }),

    // Click the browse button
    page.locator('div[data-type="dukt\\\\videos\\\\fields\\\\Video"] button').click(),
  ]);
}

module.exports = {
  goToSingleVideoPage,
  openExplorer,
}