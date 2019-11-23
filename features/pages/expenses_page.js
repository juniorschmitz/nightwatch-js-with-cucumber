var expenseActions = {
  expectToHaveExpensesGraphics: function() {
    return this
        .waitForElementVisible('@expensesChart', 10000)
        .assert.visible('@expensesChart')
  }
}

module.exports = {
  url: '',
  commands: [expenseActions],
  elements: {
      expensesChart: '#canvas'
  }
}

