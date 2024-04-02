/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const email = Cypress.env('userEmail');
const password = Cypress.env('userPassword');

When('I am located on Create Account form', () => {
    cy.get('.register-card').find('.title')
        .should('contain', 'Create Account');
})

Then('I enter an Email to email textbox', () => {
    cy.get('#emailAddress').type(email);
    cy.log(email);
})

Then('I enter Password to password textbox', () => {
    cy.get('.password-input').type(password);
})

Then('I select {string} as a Country', (country) => {
    cy.get('[formcontrolname="countryNumericCode"]')
        .click()
        .contains(country).click();
})

Then('I select {string} as a Currency', (currency) => {
    cy.get('[formcontrolname="currencyId"]')
        .click()
        .contains(currency).click({force: true});
})

Then('I click Next button', () => {
    cy.get('button').contains('Next').click();
})

Then('I enter {string} as Last name', (lastName) => {
    cy.get('#lastName').type(lastName);
})

Then('I enter {string} as First name', (firstName) => {
    cy.get('#firstName').type(firstName);
})

Then('I select {string} {int} {int} as a Date of Birth', (birthMonth, birthDay, birthYear) => {
    // Selecting the MONTH
    cy.get('#month-dropdown')
        .type(birthMonth)
        .find('[role="option"]')
        .contains(birthMonth)
        .click();
    // Selecting the DAY
    cy.get('#day').type(birthDay);
    // Selecting the YEAR
    cy.get('#year').type(birthYear);
})

Then('I select {string} as a gender', (gender) => {
    cy.get('[formcontrolname="genderType"]')
        .click()
        .contains(gender)
        .click();
})

Then('I select {string} as a City', (city) => {
    cy.get('[formcontrolname="city"]')
        .type(city)
        .find('[role="option"]')
        .contains(city)
        .click()
})

Then('I confirm Postal Code is automatically populated', () => {
    // Just a confirmation that the POSTAL CODE field is not empty
    cy.get('#zipCode-mock').should('not.be.empty');
})

Then('I enter {string} as an Address', (address) => {
    cy.get('#address').type(address);
})

Then('I enter {int} as a Phone Number', (phoneNumber) => {
    cy.get('#phoneNumber').type(phoneNumber);
})

Then('I check {string} checkbox', (checkboxName) => {
    cy.contains(checkboxName).parents('xbet-form-checkbox').within(() => {
        cy.get('[type="checkbox"]').click()
    // cy.log is for debugging purposes
    cy.log(checkboxName);
    })
})

Then('I click on Finish Registration button to confirm the registration', () => {
    cy.intercept('POST', 'https://playerapi.stage-xtreme.com/api/public/registration/register?t=04ea061a-8abb-4167-bcb7-c58ca530e7c4**')
        .as('registerUser');
    // get command is the action we are performing and which will trigger the API endpoint we are intercepting
    cy.get('[type="submit "]').contains('Finish Registration').click();
    cy.wait('@registerUser', {timeout: 10000}).then((interception) => {
        expect(interception.response.statusCode).to.equal(200); // Assert status code
    });
})

Then('I enter newly created user Email', () => {
    cy.get('#login-modal').find('#loginUsername')
        .type(email);
})

Then('I enter user Password', () => {
    cy.get('#login-modal').find('#loginPassword')
        .type(password);
})

Then('I enter existing user {string} Email', (existingEmail) => {
    cy.get('#login-modal').find('#loginUsername')
        .type(existingEmail);
})

Then('I click to confirm the login', () => {
    cy.get('#login-modal').find('#loginButton').click();
})

Then('I confirm we are successfully logged in', () => {
    cy.get('.icon-user-logged-in').should('be.visible');
})

Then('I click Sign Out from the sidebar', () => {
    cy.get('.menu-drawer-right').contains('Sign Out').click({force: true});
})