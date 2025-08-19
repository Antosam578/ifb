import{test,expect} from "@playwright/test"

test('dropdown', async({page})=>{
   
await page.goto('https://testautomationpractice.blogspot.com/');
//await page.locator('//select[@id="country"]').selectOption('Germany');
//await page.locator('//select[@id="country"]').selectOption({value: "germany"});
await page.locator('//select[@id="country"]').selectOption({index:3});
await page.pause()
})

test('dropdown multi select', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//label[@for="colors"]').selectOption(['Blue','red']);
await page.pause()
})

test('suggestion dropdown ', async({page})=>{

    await page.goto('https://www.google.com/');
    await page.locator('//textarea[@class="gLFyf"]').fill('india');
    
    const locat = await page.locator('//ul[@class="G43f7e"]')
    await locat.first().waitFor()
    const text = await locat.allTextContents()

    for(let i=0;i<=text.length;i++){
        let etext=await text[i]
        if (etext.includes("India") && etext.includes("Country in South Asia")){
            await locat.nth(i).click();
        } } })

test.only('Date select', async({context})=>{
    const page = await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('//input[@id="datepicker"]').fill('11/16/1993');
    await page.locator('//input[@id="txtDate"]').click();
    await page.locator('.ui-datepicker-year').selectOption({ value: "2025"})
    await page.locator('.ui-datepicker-month').selectOption('Nov')
    await page.locator('//a[@data-date="16"]').click()

await page.pause()
})

