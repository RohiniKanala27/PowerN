import { expect, test } from "@playwright/test";
import Login from "../../../page/login";
import { projects } from "../../../page/projects";
import { DevINLComp } from "../../../page/DevINLComp";
import { SelectedComponent } from "../../../page/SelectedComponent";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import fs from "fs";
import { Console } from "console";
import data from "../../../testdata/logintestdata.json";
//import components from "../../../../testdata/componentstestdata.json";


test.beforeEach("Launch the PowerN app", async ({ page }) => {
  const loginPageObj = new Login(page);
  await loginPageObj.openApplication();
  await loginPageObj.login(data.userName, data.password);

  const projectsObj = new projects(page);
  await projectsObj.activateProject();
  await page.waitForTimeout(80000);
  const INLprojectObj = new DevINLComp(page);
  await INLprojectObj.INLProjSelectionTree();
  
});

test("FOOTINGS BOC Components", async ({page}) => {

  const footingsSelectedComponent = new SelectedComponent(page);
  await footingsSelectedComponent.selComponent("FOOTINGS BOC");
  });

test("Level 1 TOC Components", async ({page}) => {

    const footingsSelectedComponent = new SelectedComponent(page);
    await footingsSelectedComponent.selComponent("LEVEL 1 TOC");
});
test("PIER TOC Components", async ({page}) => {

    const footingsSelectedComponent = new SelectedComponent(page);
    await footingsSelectedComponent.selComponent("PIER TOC");
 });
test("LEVEL 2 Components", async ({page}) => {

    const footingsSelectedComponent = new SelectedComponent(page);
    await footingsSelectedComponent.selComponent("LEVEL 2");
});
test("LEVEL 3 Components", async ({page}) => {

    const footingsSelectedComponent = new SelectedComponent(page);
    await footingsSelectedComponent.selComponent("LEVEL 3");
});
test("PENTHOUSE Components", async ({page}) => {

    const footingsSelectedComponent = new SelectedComponent(page);
    await footingsSelectedComponent.selComponent("PENTHOUSE");
});
test("CRANE SUPPORT TOS Components", async ({page}) => {

    const footingsSelectedComponent = new SelectedComponent(page);
    await footingsSelectedComponent.selComponent("CRANE SUPPORT TOS");
});
test("LEVEL 2 TOS Components", async ({page}) => {

    const footingsSelectedComponent = new SelectedComponent(page);
    await footingsSelectedComponent.selComponent("LEVEL 2 TOS");
});
test("LEVEL 3 TOS Components", async ({page}) => {

    const footingsSelectedComponent = new SelectedComponent(page);
    await footingsSelectedComponent.selComponent("LEVEL 3 TOS");
});
test("LEVEL 4 TOS Components", async ({page}) => {

    const footingsSelectedComponent = new SelectedComponent(page);
    await footingsSelectedComponent.selComponent("LEVEL 4 TOS");
});
test("ROOF TOS Components", async ({page}) => {

    const footingsSelectedComponent = new SelectedComponent(page);
    await footingsSelectedComponent.selComponent("ROOF TOS");
});
test("ROOF Components", async ({page}) => {

    const footingsSelectedComponent = new SelectedComponent(page);
    await footingsSelectedComponent.selComponent("ROOF");
    await page.pause();
});
