import { expect, test } from "@playwright/test";
import Login from "../../page/login";
import { projects } from "../../page/projects";
let page
test.beforeAll("Launch the PowerN app", async ({browser }) => {
  // Create a new incognito browser context
  const context = await browser.newContext();
  // Create a new page inside context.
   page = await context.newPage();
  const loginPageObj = new Login(page);
  await loginPageObj.openApplication();
  await loginPageObj.login("devuser", "cpM$Dev@2024");

  const projectsObj = new projects(page);
  await projectsObj.activateProject();
  await page.waitForTimeout(10000);
 
});
test.only("Add Folder to File Manager Home", async () => {
    await page.getByRole('tab', { name: 'File Manager' }).click();
    await page.locator('button[name="add"]').click();
    await page.getByRole('menuitem', { name: 'New Folder' }).click();
    await page.getByLabel('Add Folder').click();
    await page.getByLabel('Add Folder').fill("RKTest");
    await page.getByRole('button', { name: 'Create' }).click();
    await page.getByLabel('search').click();
    await page.getByLabel('search').fill('RKTest');
    await page.locator('.sc-sLsrZ > div:nth-child(2) > button').click();
    //const locator =  page.getByText('RKTest')
    const locator = page.getByRole('cell', { name: 'RKTest', exact: true })
    await expect(locator).toHaveText("RKTest")
    await page.waitForTimeout(5000)
    await page.pause();
   
})
test("Update file in File Manager Home", async ({page}) => {
    await page.getByRole('tab', { name: 'File Manager' }).click();
    await page.locator('button[name="add"]').click();
    await page.getByRole('menuitem', { name: 'Upload File' }).click();
    const fileChooserPromise = page.waitForEvent("filechooser");
    await page.getByRole("button", { name: "browse files" }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles("testdata/imgs/namaskar.png");
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForTimeout(5000)
    await page.pause();
})
