Feature: Login
  In order to manage my account
  as a customer
  I want to login

    Background:
      Given I navigate to Parabank
 
    @smoke
   Scenario:  Login with valid credentials
     When I enter valid email and password into the login fields
     And I click the login button
     Then I should be correctly logged in     
    @regression
   Scenario: Login with invalid credentials
     When I enter invalid email or password into the login fields
     And I click the login button
     Then I should see a "The username and password could not be verified." message