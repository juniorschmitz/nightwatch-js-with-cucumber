@logout_after
@expenses
Feature: Expenses page
  As a administrator user
  I would like to check the expenses
  To know what is going on with the enterprise

  Scenario: Expenses page
    Given i am on the login page
    When i login with e-mail "bla@test.com" and password "123456"
    And access the expenses comparinson
    Then the expenses graphics must appear
