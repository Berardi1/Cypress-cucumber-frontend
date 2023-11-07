Feature: Signup
  In order to manage my finances
  as a potential customer
  I want to Signup

    Background:
      Given I navigate to Parabank
 
    Scenario: Signup with valid credententials
        When I enter valid credententials into the signup fields
        And I click the register button
        Then I should be correctly registered