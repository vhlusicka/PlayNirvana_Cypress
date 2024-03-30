@validations @regression
Feature: ExtremeBets - Validations for JOIN form

    Background: Precondition
        Given I navigate to the ExtremeBets homepage
        Given I click on the JOIN button

    Scenario: Validations of empty Email and Password fields
        When I confirm that Email and Password fields are empty
        And I click Next button
        Then Validation message for empty Email appears
        And Validation message for empty Password appears

    Scenario: Validations of invalid Email and Password fields
        When I write incomplete Email and invalid Password
        And I click Next button
        Then Validation message for invalid Email appears
        And Validation message for invalid Password appears

    Scenario: Validation of existing Email
        When I write already registered Email
        And I click Next button
        Then Validation message for duplicate Email appears
        