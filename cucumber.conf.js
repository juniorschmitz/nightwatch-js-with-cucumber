const fs = require('fs');
const path = require('path');
const faker = require('faker');
const { setDefaultTimeout, After, Before, AfterAll, BeforeAll } = require('cucumber');
const { client, createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api');
const reporter = require('cucumber-html-reporter');

if (process.env.ENV.trim() == 'APPOK') {
  console.log('app ok');
  $APP_URL = '/hackathon.html';
}
else {
  console.log('app nok');
  $APP_URL = '/hackathonV2.html';
}

setDefaultTimeout(60000);

BeforeAll(async () => {
  await startWebDriver();
  await createSession();
});

Before(function () {
  client.resizeWindow(1920, 1080)
})

After({tags: '@logout_after'}, function() {

});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
  setTimeout(() => {
    timestamp = Math.floor(Date.now() / 1000);
    reporter.generate({
      theme: 'bootstrap',
      jsonFile: 'report/cucumber_report.json',
      output: `report/cucumber_report${timestamp}.html`,
      reportSuiteAsScenarios: true,
      launchReport: true,
    });
  }, 0);
});

After(function () {
  let shotPath = path.resolve(`./screenshots/${faker.random.uuid()}.png`);

  return new Promise((resolve, reject) => {
    client
      .saveScreenshot(shotPath)
      .then((res) => {
        resolve(res)
        return this.attach(fs.readFileSync(shotPath), 'image/png');
      })
  })
});