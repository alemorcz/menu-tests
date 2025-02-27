import { Given, Then, Before, After } from '@cucumber/cucumber';
import { Builder, By } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

let driver;

Before(async function() {
  const options = new chrome.Options();
  options.addArguments('--headless'); 
  options.addArguments('--disable-gpu'); 
  options.addArguments('--no-sandbox'); 
  options.addArguments('--disable-dev-shm-usage'); 
  options.addArguments('--remote-debugging-port=9222');

  driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
});

Given('que estoy en la página principal', async function() {
  console.log('Accediendo a la página principal...');
  await driver.get('http://localhost:4200');
});

Then('debería ver {string} en el título de la página principal', async function(expectedText) {
  console.log(`Verificando el título de la pagina aparezca: "${expectedText}"`);
  const h1Text = await driver.findElement(By.css('h1')).getText();
  if (h1Text !== expectedText) {
    throw new Error(`Se esperaba "${expectedText}", pero se encontró "${h1Text}"`);
  }
});

After(async function() {
  if (driver) {
    console.log('Cerrando el navegador...');
    await driver.quit();
  }
});
