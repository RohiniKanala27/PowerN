import { expect, test } from "@playwright/test";
import Login from "../../page/login";
import { projects } from "../../page/projects";

test.beforeEach("Launch the PowerN app", async ({ page }) => {
  const loginPageObj = new Login(page);
  await loginPageObj.openApplication();
  await loginPageObj.login("devuser", "cpM$Dev@2024");

  const projectsObj = new projects(page);
  await projectsObj.activateProject();
  await page.waitForTimeout(10000);
 
});
test("Add BIM File to File Manager", async ({page}) => {
    await page.getByRole('tab', { name: 'File Manager' }).click();
    await page.locator('button[name="add"]').click();
    await page.getByRole('menuitem', { name: 'BIM' }).click();
    const fileChooserPromise = page.waitForEvent("filechooser");
    await page.getByRole("button", { name: "browse files" }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles("testdata/imgs/homeTestIfc1.ifc");
    await page.getByRole('button', { name: 'Upload' }).click();
    await page.waitForTimeout(5000)
    await page.pause();
      
});