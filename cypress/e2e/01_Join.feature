@join @regression
Feature: ExtremeBets - Registration

    Background: Precondition
        Given I navigate to the ExtremeBets homepage
        When I click on the JOIN button

    @smoke
    Scenario: Registration of new account
        Given I am located on Create Account form
        When I enter "vilim.test07@mailinator.com" as an Email
        And I enter "Pass1234!" as a Password
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