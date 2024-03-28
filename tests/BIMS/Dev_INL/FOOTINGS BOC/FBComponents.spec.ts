import { expect, test } from "@playwright/test";
import Login from "../../../../page/login";
import { projects } from "../../../../page/projects";
import { INLproject } from "../../../../page/INLFBProject";
import { SelectedComponent } from "../../../../page/SelectedComponent";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import fs from "fs";
import { Console } from "console";
import data from "../../../../testdata/logintestdata.json";
import components from "../../../../testdata/componentstestdata.json";

test.beforeEach("Launch the PowerN app", async ({page}) => {
  const loginPageObj = new Login(page);
  await loginPageObj.openApplication();
  await loginPageObj.login(data.userName, data.password);

  const projectsObj = new projects(page);
  await projectsObj.activateProject();
  await page.waitForTimeout(80000);

  const INLprojectObj = new INLproject(page);
  await INLprojectObj.INLProjSelectionTree();
  
});

test(" All FOOTINGS BOC Components", async ({page}) => {

       const footingsSelectedComponent = new SelectedComponent(page);
       await footingsSelectedComponent.selComponent(components.FootingsBOCComp.FootingsBocComp1);
       await footingsSelectedComponent.selComponent(components.FootingsBOCComp.FootingsBocComp2);
      await footingsSelectedComponent.selComponent(components.FootingsBOCComp.FootingsBocComp3);
       await page.pause();
      
  });

