@join @regression
Feature: ExtremeBets - Registration

    Background: Precondition
        Given I navigate to the ExtremeBets homepage

    @smoke
    Scenario: Registration of new account
        Given I click on the JOIN button
        When I enter an Email to email textbox
        And I enter Password to password textbox
        And I select "Germany" as a Country
        And I select "JPY(¥)" as a Currency
        And I click Next button
        And I enter "Hloo" as Last name
        And I enter "Vil" as First name
        And I select "March" 29 1990 as a Date of Birth
        And I select "Male" as a gender
        And I select "Frankf" as a City
        And I confirm Postal Code is automatically populated
        And I enter "Random Street 123" as an Address
        And I enter 123456789 as a Phone Number
        # And I check "Accept Email and SMS notifications" checkbox
        # And I check "Terms and conditions" checkbox
        # And I check "Privacy Policy" checkbox
        Then I click on Finish Registration button to confirm the registration


    Scenario: Login and logout with newly created user
        Given I click on Login button
        And I enter newly created user Email
        And I enter user Password
        And I click to confirm the login
        And I confirm we are successfully logged in
        And I click on user icon
        And I click Sign Out from the sidebar

    Scenario: Login and logout with existing user
        Given I click on Login button
        And I enter existing user "vilim.test9333@mailinator.com" Email
        And I enter user Password
        And I click to confirm the login
        And I confirm we are successfully logged in
        And I click on user icon
        And I click Sign Out from the sidebar