import { type Locator, type Page } from "@playwright/test";

export class projects{

    readonly page: Page;
    readonly INLprojectButton: Locator;
    readonly INLelement: Locator;
    readonly projActivateButton: Locator;
   // readonly pcCheckBox : Locator;

    constructor(page: Page){
        this.page = page;
        this.projActivateButton = page.locator('li').filter({ hasText: 'INL Project' }).getByRole('button').first();
        //this.pcCheckBox = page.getByLabel("Point Cloud");
        // this.INLprojectButton = page.locator("li").filter({ hasText: "INL ProjectModified At: Tue" }).getByRole("button").first();
        // this.INLelement = page.getByRole("button", { name: "INL Project" });

    }

    async activateProject(){
      await  this.projActivateButton.click();
      //await this.pcCheckBox.uncheck();
     
      
    }

}
    
