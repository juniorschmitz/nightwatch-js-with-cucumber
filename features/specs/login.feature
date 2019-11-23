@logout_after
@login
Feature: Login
  As users
  We would like to login on the Acme page
  To use all the application features

  Scenario: Validate Login Form
    Given i am on the login page 
    Then the form name must be "Login Form"
    And the username and password fields must be called "Username" and "Password"
    And there must be the links to access the Twitter, Facebook and Linkedin pages

  Scenario: Login OK
    Given i am on the login page
    When i login with e-mail "bla@test.com" and password "123456"
    Then the login should be successful

  Scenario: Login without username
    Given i am on the login page
    When i login with e-mail "" and password "123456"
    Then there should be a message saying that the "Username must be present"

  Scenario: Login without password
    Given i am on the login page
    When i login with e-mail "bla@test.com" and password ""
    Then there should be a message saying that the "Password must be present"

  Scenario: Login without mail and password
    Given i am on the login page
    When i login with e-mail "" and password ""
    Then there should be a message saying that the "Both Username and Password must be present"