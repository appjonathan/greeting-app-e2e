// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Default Suite', function() {
  this.timeout(3000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Untitled', async function() {
    await driver.get("http://localhost:3000/greeting.html")
    await driver.findElement(By.id("nameInput")).click()
    await driver.findElement(By.id("nameInput")).sendKeys("Jonathan")
    await driver.findElement(By.css("button")).click()
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id("greetingMessage"))), 30000)
  })
})
