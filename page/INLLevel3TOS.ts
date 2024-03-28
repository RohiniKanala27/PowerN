import { type Locator, type Page } from "@playwright/test";

export class INLLevel3TOSproject{
    readonly page: Page;
    readonly selectionTreeButton : Locator;
    readonly plusButton : Locator;
    readonly BIMSButton:Locator;
    readonly BIMSPlusButton : Locator;
    readonly DIPlusButton : Locator;
    readonly FBPlusButton: Locator;
    readonly DINLButton : Locator;
    

    constructor(page: Page){
        this.selectionTreeButton = page.locator("li").filter({ hasText: "Selection Tree" }).getByRole("button");
        this.plusButton=  page.getByRole("button", { name: "+" });
        this.BIMSButton = page.getByRole("button", { name: "BIMs" });
        this.BIMSPlusButton = page.getByRole('button', { name: '+' }).first();
        //this.DINLButton =    page.locator("div > div").getByRole("button",{name = "dev_inl.ifc"}).filter({hasText:"+"});
        this.DIPlusButton = page.getByRole("button", { name: "+" }).first();
        this.FBPlusButton = page.getByRole("button", { name: "+" }).nth(8);
    }

    async INLProjSelectionTree(){
        await this.selectionTreeButton.click();
        await this.plusButton.click();
        await this.BIMSButton.click();
        await this.BIMSPlusButton.click();
       // await this.DINLButton.click();
        await this.DIPlusButton.click();
        await this.FBPlusButton.click();

    }

}