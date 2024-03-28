import { type Locator, type Page } from "@playwright/test";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import fs from "fs";
import { expect} from "@playwright/test";

export class SelectedComponent {

    readonly page: Page;
    readonly pcCheckBox : Locator;
    constructor(page: Page){
        this.page = page;   
        this.pcCheckBox = page.getByLabel("Point Cloud");
       
    }

    async selComponent(component){
        await this.pcCheckBox.uncheck();
        const beforeClickImage = await this.page.screenshot();
        // Clicking on the element
        
        await this.page.getByRole("button", { name: component , exact : true}).click(); 
         // Capture screenshot after click
        const afterClickImage = await this.page.screenshot();  
        // await this.page.locator('div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > .sc-gEvEer > button').first().click();
        // await this.page.getByRole('button', { name: 'Footing-Rectangular:16\' x 16\' x 21":297594' }).click();
        // await this.page.mouse.click(10, 10, { button:"left"});
        // const afterCompUnClickImage = await this.page.screenshot();  
         // Compare the two images
        const img1 = PNG.sync.read(beforeClickImage);
        const img2 = PNG.sync.read(afterClickImage);
        // const img3 = PNG.sync.read(afterCompUnClickImage);
        const { width, height } = img1;
        const diffImage = new PNG({ width, height });
        const diffImage1 = new PNG({ width, height });
        //Use pixelmatch to compare images
        const mismatchedPixels = pixelmatch(img1.data,img2.data,diffImage.data,width,height,{ threshold: 0.1 });
         // Save the diff image
         fs.writeFileSync("INLScreenshots/BIMS/Dev_INL/"+component+" highlightedDiff.png", PNG.sync.write(diffImage));
       
        // const mismatchedPixels1 = pixelmatch(img3.data,img2.data,diffImage1.data,width,height,{ threshold: 0.1 });
        // fs.writeFileSync("INLScreenshots/BIMS/Dev_INL/"+component+" highlightedDiff1.png", PNG.sync.write(diffImage1));
        
        // Define a threshold for considering a region as highlighted
        const highlightThreshold = 100;
        // Check if the number of mismatched pixels exceeds the threshold
        const isHighlighted = mismatchedPixels > highlightThreshold;
        // Assert if the region is highlighted or not
        expect(isHighlighted).toBe(true);
    }
}

