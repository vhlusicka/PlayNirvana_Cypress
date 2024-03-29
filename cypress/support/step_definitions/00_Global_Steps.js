/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.stage-xtreme-tenant.com/"

// Navigation to homepage
Given('I navigate to the ExtremeBets homepage', () => {
    cy.visit(url);
})

// Navigation to register form
When('I click on the JOIN button', () => {
    cy.get('.navbar').get('.join-btn-web').click();
})

