import { expect, test } from "@playwright/test";
import Login from "../../../../page/login";
import { projects } from "../../../../page/projects";
import { DevINLComp } from "../../../../page/DevINLComp";
import { SelectedComponent } from "../../../../page/SelectedComponent";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import fs from "fs";
import { Console } from "console";
import data from "../../../../testdata/logintestdata.json";
//import components from "../../../../testdata/componentstestdata.json";


test.beforeEach("Launch the PowerN app", async ({ page }) => {
  const loginPageObj = new Login(page);
  await loginPageObj.openApplication();
  await loginPageObj.login(data.userName, data.password);

  const projectsObj = new projects(page);
  await projectsObj.activateProject();
  await page.waitForTimeout(80000);
  
});

test("Approach 3 --> Captures only highlighted Image separately - FOOTINGS BOC Link", async ({page}) => {

  
  const INLprojectObj = new DevINLComp(page);
  await INLprojectObj.INLProjSelectionTree();
  const footingsSelectedComponent = new SelectedComponent(page);
  await footingsSelectedComponent.selComponent("FOOTINGS BOC");
  });

  test("Approach 3 --> Captures only highlighted Image separately - Level 1 TOC", async ({page}) => {

  
    const INLL1TOCObj = new DevINLComp(page);
    await INLL1TOCObj.INLProjSelectionTree();
    const footingsSelectedComponent = new SelectedComponent(page);
    await footingsSelectedComponent.selComponent("LEVEL 1 TOC");
    await page.pause();
    });
  