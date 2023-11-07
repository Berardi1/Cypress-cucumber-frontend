import {When, Then} from '@badeball/cypress-cucumber-preprocessor';

When('I enter valid credententials into the signup fields', () => {
    cy.xpath('//*[@id="loginPanel"]/p[2]/a').click(); 
    cy.xpath('//*[@id="customer.firstName"]').type('Berardi'); 
    cy.xpath('//*[@id="customer.lastName"]').type('Agustin');
    cy.xpath('//*[@id="customer.address.street"]').type('1234'); 
    cy.xpath('//*[@id="customer.address.city"]').type('Ucacha'); 
    cy.xpath('//*[@id="customer.address.state"]').type('Cordoba');
    cy.xpath('//*[@id="customer.address.zipCode"]').type('1234');
    cy.xpath('//*[@id="customer.phoneNumber"]').type('1234567');
    cy.xpath('//*[@id="customer.ssn"]').type('1234');
    cy.xpath('//*[@id="customer.username"]').type('Berardi');
    cy.xpath('//*[@id="customer.password"]').type('password');
    cy.xpath('//*[@id="repeatedPassword"]').type('password');
  });
  

When('I click the register button', () => {
    cy.get('[value=Register]').click(); 
  });
  

Then('I should be correctly registered', () => {
  cy.xpath('//*[@id="rightPanel"]/p').should('include.text', 'Your account was created successfully. You are now logged in.'); 
  });