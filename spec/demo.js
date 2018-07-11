var selenium = require('selenium-webdriver');
var visual = require('galen-visual');

let driver;
describe('github navigation', function(){
    this.timeout(60000);
    beforeEach( async function(){
        driver = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).build();
        visual.init('PVVMjWyRpt5hiBJEkJW4aM2');
    });

    it('should be on the login page', async function(){
        await driver.get("https://github.com/login");
        //await driver.findElement(selenium.By.xpath("//a[contains(text(),'Sign in')]")).click();
        var result = await visual.verify(driver, 'github_login');
        console.log(result);
        console.log(visual.getLastResultUrl());
        console.log(visual.getLastSummary());

    });

    /*it('should be on the home page', async function(){
        await driver.get("https://github.com");

    });*/

    afterEach( async function() {
        await driver.quit();
    });
})