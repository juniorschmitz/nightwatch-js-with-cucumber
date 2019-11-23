const { client } = require('nightwatch-api')
const { Given, When, Then } = require('cucumber');

Given('i am on the login page', function () {
    let login_page = client.page.login_page()
    return login_page.load()
});

When('i login with e-mail {string} and password {string}', function (email, password) {
    let login_page = client.page.login_page()
    return login_page.performLogin(email, password)
});

Then('the login should be successful', function () {
    let pannel_page = client.page.pannel_page()
    return pannel_page.expectLoggedInfo()
});

Then('there should be a message saying that the {string}', function(message) {
    let login_page = client.page.login_page()
    return login_page.expectLoginErrorMessage(message)
});

Then('the form name must be {string}', function(name) {
    let login_page = client.page.login_page()
    return login_page.expectFormNameEqual(name)
});

Then('the username and password fields must be called {string} and {string}', function(nameinput1, nameinput2) {
    let login_page = client.page.login_page()
    login_page.expectUserFieldNameEqual(nameinput1)
    return login_page.expectPasswordFieldNameEqual(nameinput2)
});

Then('there must be the links to access the Twitter, Facebook and Linkedin pages', function() {
    let login_page = client.page.login_page()
    return login_page.expectSocialMediaLinks()
});
