const { client } = require('nightwatch-api')
const { Given, When, Then } = require('cucumber');

When('access the expenses comparinson', function () {
  let pannel_page = client.page.pannel_page()
  return pannel_page.accessExpenses()
});

Then('the expenses graphics must appear', function () {
  let expenses_page = client.page.expenses_page()
  return expenses_page.expectToHaveExpensesGraphics()
});
