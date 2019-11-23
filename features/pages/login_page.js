var loginActions = {
  load: function() {
    return this.navigate()
  },
  performLogin: function (email, pass) {
      return this
          .navigate()
          .waitForElementVisible('@emailInput', 10000)
          .setValue('@emailInput', email)
          .setValue('@passInput', pass)
          .click('@loginButton')
  },
  expectLoginErrorMessage: function(message) {
    return this
        .waitForElementVisible('@alertWarning', 10000)
        .assert.containsText('@alertWarning', message)
  },
  expectFormNameEqual: function(name) {
      return this
          .waitForElementVisible('@formName', 10000)
          .assert.containsText('@formName', name)
  },
  expectUserFieldNameEqual: function(name) {
      return this
          .waitForElementVisible('@userFieldName', 10000)
          .assert.containsText('@userFieldName', name)
  },
  expectPasswordFieldNameEqual: function(name) {
      return this
          .waitForElementVisible('@passwordFieldName', 10000)
          .assert.containsText('@passwordFieldName', name)
  },
  expectSocialMediaLinks: function() {
      return this
          .waitForElementVisible('@twitterIcon', 10000)
          .assert.visible('@twitterIcon')
          .assert.visible('@facebookIcon')
          .assert.visible('@linkedinIcon')
  }
}

module.exports = {
  // url: '/hackathon.html',
  url: $APP_URL,
  commands: [loginActions],
  elements: {
      loginForm: '.menu-side',
      emailInput: 'input#username',
      passInput: 'input#password',
      loginButton: 'button#log-in',
      alertWarning: '.alert-warning',
      formName: '.auth-header',
      userFieldName: 'form > div:nth-child(1) > label',
      passwordFieldName: 'form > div:nth-child(2) > label',
      twitterIcon: 'img[src="img/social-icons/twitter.png"]',
      facebookIcon: 'img[src="img/social-icons/facebook.png"]',
      linkedinIcon: 'img[src="img/social-icons/linkedin.png"]'
  }
}
