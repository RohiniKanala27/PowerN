import { expect, test } from "@playwright/test";
import Login from "../../../../page/login";
import { projects } from "../../../../page/projects";
import { INLLevel3TOSproject } from "../../../../page/INLLevel3TOS";
import { SelectedComponent } from "../../../../page/SelectedComponent";
import { PNG } from "pngjs";
import data from "../../../../testdata/logintestdata.json";
import components from "../../../../testdata/componentstestdata.json";

test.beforeEach("Launch the PowerN app", async ({page}) => {
  const loginPageObj = new Login(page);
  await loginPageObj.openApplication();
  await loginPageObj.login(data.userName, data.password);

  const projectsObj = new projects(page);
  await projectsObj.activateProject();
  await page.waitForTimeout(90000);


  const INLprojectObj = new INLLevel3TOSproject(page);
  await INLprojectObj.INLProjSelectionTree();
  
});

test(" All Level3 TOS Links", async ({page}) => {

       const L3TOSSelectedComponent = new SelectedComponent(page);
       await L3TOSSelectedComponent.selComponent(components.L3TOSComp.L3TOSComp1);
       await L3TOSSelectedComponent.selComponent(components.L3TOSComp.L3TOSComp2);
       await page.pause();
      
  });