var pannelActions = {
  expectLoggedInfo: function (texto) {
      return this
          .waitForElementVisible('@loggedInfo', 10000)
          .assert.visible('@loggedInfo')
  },
  accessExpenses: function() {
    return this
        .waitForElementVisible('@accessExpensesButton', 10000)
        .click('@accessExpensesButton')
  }
}

module.exports = {
  url: '',
  commands: [pannelActions],
  elements: {
      loggedInfo: '.logged-user-info-w',
      accessExpensesButton: '#showExpensesChart'
  }
}