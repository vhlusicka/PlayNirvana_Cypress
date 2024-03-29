/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.stage-xtreme-tenant.com/"

Given('I navigate to the ExtremeBets homepage', () => {
    cy.visit(url);
})

When('I click on the JOIN button', () => {
    // cy.get('#contact-us').invoke('removeAttr', 'target').click()
})