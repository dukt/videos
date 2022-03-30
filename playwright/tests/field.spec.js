const {test, expect} = require('@playwright/test');

test('Shoud show a Videos field', async ({ page, context, baseURL }) => {
  await page.goto(baseURL + '/globals/default/singleVideo');

  const title = page.locator('h1');
  await expect(title).toHaveText('Single Video');

  const length = await page.locator('div[data-type="dukt\\\\videos\\\\fields\\\\Video"]').count();
  expect((length > 0)).toBeTruthy();
});


test('Shoud show a Matrix Videos field', async ({ page, context, baseURL }) => {
  await page.goto(baseURL + '/globals/default/matrixVideos');

  const title = page.locator('h1');
  await expect(title).toHaveText('Matrix Videos');

  // Check that we have a videos matrix field
  const matrixField = await page.locator('#fields-videos.matrix');
  expect(matrixField).toBeVisible();


  // Add a matrix row
  await page.locator('#fields-videos.matrix button.add[data-type="video"]').click()

  // Check that there is at least one video
  const length = await page.locator('#fields-videos.matrix .fields div[data-type="dukt\\\\videos\\\\fields\\\\Video"]').count();
  expect((length > 0)).toBeTruthy();
});