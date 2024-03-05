// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('Default Suite', function() {
  this.timeout(5000);
  let driver;
  let vars;
  beforeEach(async function() {
    let chromeOptions = new chrome.Options();
    chromeOptions.addArguments("--headless");
    driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
  });
  afterEach(async function() {
    if (driver) {
      await driver.quit();
    }
  });
  it('Untitled', async function() {
    await driver.get("http://localhost:3000/greeting.html");
    await driver.findElement(By.id("nameInput")).click();
    await driver.findElement(By.id("nameInput")).sendKeys("Jonathan");
    await driver.findElement(By.css("button")).click();
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id("greetingMessage"))), 30000);
  });
});