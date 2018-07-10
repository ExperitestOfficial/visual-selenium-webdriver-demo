var selenium = require('selenium-webdriver');
var visual = require('galen-visual')
let driver;
describe('github navigation', function(){
    beforeEach(function(done){
        this.driver = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).build();
        this.driver.get("https://github.com").then(done);
        visual.init('tR19OYaA4iRSW8s1vZm0LeB');
    });
    afterEach(function(done) {
        this.driver.quit().then(done);
    });
    it('should be on the home page', function(done){
        this.driver.findElement(selenium.By.xpath('//*[@href="/features"]')).click();
        visual.verify(this.driver, "github_home").then(function(result){
            if(!result){
                console.log(visual.getLastResultUrl());
            }
        });
        console.log(result);

    });
})