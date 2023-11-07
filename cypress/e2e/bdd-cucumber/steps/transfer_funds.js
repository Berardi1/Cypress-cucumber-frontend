import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';


Given('I am logged in to my bank account', () => {
    cy.get('[name=username]').type('Berardi');
    cy.get('[name=password]').type('password'); 
    cy.get('[type=submit]').click(); 
  });
  
When('I initiate a fund transfer of $500 to my savings account', () => {
    cy.xpath('//*[@id="leftPanel"]/ul/li[3]/a').click(); 
    cy.get('#amount').type('500');
    cy.get('[type=submit]').click();
  });
  
Then('I should get a "$500.00 has been transferred" message', () => {
    cy.get('#amount').should('include.text', '$500.00'); 
  });
