# Cypress-Cucumber-Frontend

End-to-end frontend test automation project built with **JavaScript, Cypress and Cucumber**.

The project automates functional scenarios against the **ParaBank** demo application using **BDD/Gherkin** to describe expected behavior.

## Tech Stack

- JavaScript
- Cypress
- Cucumber / Gherkin
- XPath
- npm

## Test Coverage

The current test suite covers:

- **Login**
  - Login with valid credentials
  - Login with invalid credentials
- **Signup**
  - Successful customer registration
- **Transfer Funds**
  - Successful transfer between accounts

## Project Structure

```text
cypress/
├── e2e/
│   └── bdd-cucumber/
│       ├── features/
│       │   ├── login.feature
│       │   ├── signup.feature
│       │   └── transfer_funds.feature
│       └── steps/
│           ├── login.js
│           ├── signup.js
│           └── transfer_funds.js
├── reports/
├── screenshots/
└── support/
```

## Running the Tests

Install the project dependencies:

```bash
npm install
```

Run the complete test suite:

```bash
npm test
```

Run a specific feature:

```bash
npx cypress run --browser chrome --spec "cypress/e2e/bdd-cucumber/features/login.feature"
```

## BDD Approach

Test scenarios are written using **Gherkin** to describe application behavior in a readable format.

The feature files define the expected behavior, while the step definitions contain the Cypress implementation required to execute those scenarios.

## Documentation

- [Setup](docs/Setup.md)
- [Test Execution](docs/TestExecution.md)
- [QA Concepts](docs/QA.md)