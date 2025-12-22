# Setup

Follow these steps to set up and run the project locally.

## Prerequisites

Make sure you have installed:

- Node.js (LTS): https://nodejs.org/
- npm (included with Node.js)

## Clone the repository

~~~bash
git clone https://github.com/Berardi1/Cypress-cucumber-frontend.git
cd Cypress-cucumber-frontend
~~~

## Install dependencies

~~~bash
npm install
~~~

## Run tests

### Open Cypress UI (interactive)

~~~bash
npx cypress open
~~~

### Run tests headless (CLI)

~~~bash
npx cypress run
~~~

## Notes

- The base URL is configured in `cypress.config.js` via `baseUrl`.
- Feature files are located under: `cypress/e2e/bdd-cucumber/features/`
- Step definitions are located under: `cypress/e2e/bdd-cucumber/steps/`
