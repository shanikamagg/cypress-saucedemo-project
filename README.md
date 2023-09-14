Cypress UI Test Framework

Description:
Two Test Cases Covered
1. e2e folder contains two folders
2. pageobjects - consisting page objects to represent each page
3. tests folder has test cases classes
4. Fixtures to read the data
5. Created custom commands in commands.js file under support file
6. url is reading from cypress.config.js file

Prerequisites:
nodejs
npm
cypress
Xpath Plugin
Cypress -Allure plugin

Installation Steps:
1. Create a local project - mkdir project name
2. Go to the project - cd  project name
3. Install below packages - npm - nmp init ,cypress - npm install cypress, npm i cypress-xpath
4. Add the following in the package.json file
"scripts": {
    "cypress:open": "./node_modules/.bin/cypress open",
  }
5. Install cypress allue plugin for reporting - npm i -D @shelex/cypress-allure-plugin and npm i allure-commandline

Test Execution
1. Go to the project
2. npx cypress open
3. Select the browser
4. Select the test case

Reporting - Allure Reporting
1. Install allure plugin - npm i -D @shelex/cypress-allure-plugin
2. Change the configurations according to this link -https://www.npmjs.com/package/@shelex/cypress-allure-plugin
3. Commands to execute - npm run api-allure , npm run allure:report, allure open
