Feature: Transfer Funds
  In order to manage my finances
  as a customer
  I want to transfer funds between my accounts

  Scenario: Successful Fund Transfer
    Given I navigate to Parabank
    And I am logged in to my bank account
    When I initiate a fund transfer of $500 to my savings account
    Then I should get a "$500.00 has been transferred" message