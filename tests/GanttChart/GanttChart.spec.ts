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
test("Add new task in  - Day tab of Gantt Chart ", async ({page}) => {
    await page.getByRole('tab', { name: 'Gantt Chart' }).click();
    await page.getByLabel('add new').getByLabel('new').click();
    await page.getByLabel('Title').click();
    await page.getByLabel('Title').fill('new test task');
    await page.locator('div').filter({ hasText: /^Planned Start Date$/ }).getByLabel('Choose date, selected date is').click();
    await page.getByLabel('Planned Start Date').getByRole('gridcell', { name: '18' }).click();
    await page.locator('div').filter({ hasText: /^Planned End Date$/ }).getByLabel('Choose date, selected date is').click();
    await page.getByLabel('Planned End Date').getByRole('gridcell', { name: '28' }).click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();
});

test("Filter task in  - Day tab of Gantt Chart ", async ({page}) => {
    await page.getByRole('tab', { name: 'Gantt Chart' }).click();
    await page.getByRole('button', { name: 'filter' }).click();
    await page.getByLabel('Title').click();
    await page.getByLabel('Title').fill('new test task');
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.pause();
});
