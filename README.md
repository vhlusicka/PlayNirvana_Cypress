## Cypress Cucumber automation for ExtremeBets (assignment for PlayNirvana)

#### This is a Cypress test suite for ExtremeBets made as a part of assignment for PlayNirvana. It was made from scratch using my own Cypress Cucumber template I created. This readme includes some of my notes to help anyone else trying to use these tests and a remind myself on how to set some things.

- Author: Vilim Hlušička 
- Contact: vilim.hlusicka@gmail.com

---

### How to run Cypress tests

#### Install Cypress (node_modules folder should appear after installation):
- `npm install`
*or*
- `npm install cypress --save-dev`

#### Run Cypress via UI app
- `npx cypress open`

#### Run Cypress with tags:
- Run with one tag: `npx cypress run -e TAGS='@login' --headed` or `npx cypress run -e TAGS='@regression' --headed`
- Run with two tags: `npx cypress run -e TAGS='@login or @pim' --headed`
- Run by excluding a tag: `npx cypress run -e TAGS='(@login or @pim) and not @smoke' --headed`

#### How to run Cypress with specific browser:
- Add the option `--browser chrome` to the running command

---

### Folder structure

#### Basic folder structure

Using a Cypress with a Cucumber framework makes it possible for non-QA personel to understand the logic of testing procedure and what kind of testing is being performed.

Majority of testing logic is contained in two types of files:

- **.feature** files which are located within **e2e** folder
    - These files contain a **description** of test scenarios which are written in human-readable format called Gherkin, and it defines the login and order in which the tests are executed. These steps can be reused whenever and wherever needed and it is encouraged for steps to be reused if possible. <br>
    Example of step: `Given I navigate to the OrangeHRM Login page`

- **.js** files which are located within **support/step_definitions** folder
    - These files are called **spec files** (or test files). They contain an actual test code written in Cypress and are based on Javascript. <br>
    By executing the step `Given I navigate to the OrangeHRM Login page`, all the code defined in the .js spec file within that step will be executed. <br>
    It can consist of only one command, and it can become rather complex - it all depends on how the author of these tests defined it. <br>
    Example of command in spec file for mentioned step:
    ```js
    Given('I navigate to the ExtremeBets homepage', () => {
        cy.visit(url);
    })
    ```