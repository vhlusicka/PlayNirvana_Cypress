/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const email = Cypress.env('userEmail');

When('I confirm that Email and Password fields are empty', () => {
    cy.get('#emailAddress').clear();
    cy.get('.password-input').clear();
})

Then('Validation message for empty Email appears', () => {
    cy.get('#emailAddress').parent()
        .contains('This field is required')
        .should('be.visible');
})

Then('Validation message for invalid Email appears', () => {
    cy.get('#emailAddress').parent()
        .contains('Email is not valid')
        .should('be.visible');
})

Then('Validation message for empty Password appears', () => {
    cy.get('[formcontrolname="password"]').parent()
        .contains('This field is required')
        .should('be.visible');
})

Then('I write incomplete Email and invalid Password', () => {
    cy.get('#emailAddress').type('invalid.email@');
    cy.get('.password-input').type('Password');
})

Then('Validation message for invalid Password appears', () => {
    cy.get('[formcontrolname="password"]').parent()
        .contains('Need to contain at least 1 digit')
        .should('be.visible');
})

Then('I write already registered Email', () => {
    cy.get('#emailAddress').type(email);
})

Then('Validation message for duplicate Email appears', () => {
    cy.get('#emailAddress').parent()
        .contains('Email is already taken')
        .should('be.visible');
})