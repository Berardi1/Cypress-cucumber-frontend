import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

const loginUsername = 'john';
const loginPassword = 'demo';

Given('I navigate to Parabank', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');
});

When('I enter valid email and password into the login fields', () => {
    cy.get('[name=username]')
        .type(loginUsername)
        .should('have.value', loginUsername);

    cy.get('[name=password]')
        .type(loginPassword)
        .should('have.value', loginPassword);
});

When('I enter invalid email or password into the login fields', () => {
    cy.get('[name=username]').type('random');
    cy.get('[name=password]').type('password');
});

When('I click the login button', () => {
    cy.get('[type=submit]').click();
});

Then('I should be correctly logged in', () => {
    cy.get('.smallText').should('include.text', 'Welcome John');
});

Then('I should see a "The username and password could not be verified." message', () => {
    cy.get('.error').should(
        'include.text',
        'The username and password could not be verified.'
    );
});
