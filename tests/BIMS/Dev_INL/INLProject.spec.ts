import { expect, test } from "@playwright/test";
import Login from "../../../page/login";
import { projects } from "../../../page/projects";
import { INLproject } from "../../../page/INLFBProject";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import fs from "fs";
import { Console } from "console";

test.beforeEach("Launch the PowerN app", async ({ page }) => {
  const loginPageObj = new Login(page);
  await loginPageObj.openApplication();
  await loginPageObj.login("devuser", "cpM$Dev@2024");

  const projectsObj = new projects(page);
  await projectsObj.activateProject();
  await page.waitForTimeout(60000);

  const INLprojectObj = new INLproject(page);
  await INLprojectObj.INLProjSelectionTree();
  
});

test("Approach 3 --> Captures only highlighted Image separately", async ({page}) => {
  const beforeClickImage = await page.screenshot();
  // Clicking on the element
  await page.getByRole("button", { name: "dev_inl.ifc" }).click();
  // Capture screenshot after click
  const afterClickImage = await page.screenshot();
  // Compare the two images
  const img1 = PNG.sync.read(beforeClickImage);
  const img2 = PNG.sync.read(afterClickImage);
  const { width, height } = img1;
  const diffImage = new PNG({ width, height });
  // Use pixelmatch to compare images
  const mismatchedPixels = pixelmatch(img1.data,img2.data,diffImage.data,width,height,{ threshold: 0.1 });
   // Save the diff image
  fs.writeFileSync("INLScreenshots/BIMS/Dev_INL/highlightedDiff.png", PNG.sync.write(diffImage));
  // Define a threshold for considering a region as highlighted
  const highlightThreshold = 100;
  // Check if the number of mismatched pixels exceeds the threshold
  const isHighlighted = mismatchedPixels > highlightThreshold;
  // Assert if the region is highlighted or not
  expect(isHighlighted).toBe(true);
  await page.pause();
});

