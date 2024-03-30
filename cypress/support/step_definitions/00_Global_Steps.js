/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.stage-xtreme-tenant.com/"

// Navigation to homepage
Given('I navigate to the ExtremeBets homepage', () => {
    cy.visit(url);
})

// Navigation to register form
When('I click on the JOIN button', () => {
    cy.get('.navbar').get('.join-btn-web').click();
})

When('I click on Login button', () => {
    cy.get('.login-btn-web')
        .should('be.visible')
        .click();
})

Then('I click on user icon', () => {
    cy.get('.user-info').click();
})