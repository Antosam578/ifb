import { test, expect } from '@playwright/test';

test('simple alert', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/')
  page.on('dialog', async dialog=>{
    console.log(dialog.type())
    console.log(dialog.message())
    expect(dialog.message('I am alert box!'))

    await dialog.accept()
  })

  await page.click('//button[@id="alertBtn"]')
  await page.pause()
});

test('conformation alert', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/')
  page.on('dialog', dia=>{
    console.log(dia.type())
    console.log(dia.message())
    expect(dia.message('Press a button!'))

    dia.dismiss()
  })

  await page.click('//button[@id="confirmBtn"]')
  await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!')
  await page.pause()
});


test.only('prompt alert', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/')
  page.on('dialog',async dia=>{
    console.log(dia.type())
    console.log(dia.message())
    expect(dia.message('Please enter your name:'))

    await dia.accept('Antony')
  })

  await page.click('//button[@id="promptBtn"]')
  await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Antony! How are you today?')
  await page.pause()
});