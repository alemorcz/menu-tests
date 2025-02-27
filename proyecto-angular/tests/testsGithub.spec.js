import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';

(async function testGithubLink() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:4200/');

        let githubIcon = await driver.findElement(By.css('svg.github'));
        await githubIcon.click();

        await driver.wait(async () => (await driver.getAllWindowHandles()).length > 1, 5000);

        let handles = await driver.getAllWindowHandles();
        await driver.switchTo().window(handles[1]);

        let currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://github.com/angular/angular');
        console.log('✅ Test Passed: La URL es correcta');
    } catch (error) {
        console.error('❌ Test Failed:', error);
    } finally {
        await driver.quit();
    }
})();
