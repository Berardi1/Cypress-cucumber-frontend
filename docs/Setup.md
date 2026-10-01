# Setup

Follow these steps to set up and run the project locally.

## Prerequisites

Make sure you have installed:

- Node.js (LTS): https://nodejs.org/
- npm (included with Node.js)

## Clone the Repository

```bash
git clone https://github.com/Berardi1/Cypress-cucumber-frontend.git
cd Cypress-cucumber-frontend
```

## Install Dependencies

```bash
npm install
```

## Run Tests

### Open Cypress UI

To open Cypress in interactive mode:

```bash
npx cypress open
```

### Run Tests in Headless Mode

To execute the complete test suite from the command line:

```bash
npm test
```

## Notes

- The base URL is configured in `cypress.config.js` using `baseUrl`.
- Feature files are located under `cypress/e2e/bdd-cucumber/features/`.
- Step definitions are located under `cypress/e2e/bdd-cucumber/steps/`.