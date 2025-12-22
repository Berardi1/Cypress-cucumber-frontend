# QA Approach

This project applies a practical Quality Assurance (QA) approach focused on realistic test coverage, maintainability, and traceability between automated tests and documented requirements.

The automated test suite is built using **Cypress with Cucumber (BDD)**, following a structure that mirrors how QA teams work in real-world projects. Test scenarios are designed to reflect actual user behavior and system expectations, rather than isolated technical checks.

---

## Behavior-Driven Development (BDD) with Gherkin

Gherkin is used to describe application behavior in a clear and readable way, enabling alignment between test scenarios, expected system behavior, and QA documentation.

In this project:

- Gherkin scenarios represent user-facing behaviors such as **login**, **signup**, and **fund transfers**.
- Scenarios are aligned with **Jira user stories and bugs**, ensuring traceability between automated tests and QA findings.
- Both positive (happy path) and negative scenarios are covered when supported by the system behavior.

This approach helps keep tests understandable and meaningful, even for non-technical stakeholders.

---

## Page Object Model (POM)

The test suite follows the **Page Object Model (POM)** design pattern to improve maintainability and scalability.

Each page or functional area of the application is represented by a dedicated Page Object that encapsulates:

- UI elements
- Page-specific actions
- Navigation logic

This structure proved especially valuable during the upgrade of the test framework to **Cypress 13+**, as UI interactions and selectors could be maintained with minimal impact on test scenarios.

### Key benefits observed in this project

- Reduced duplication of selectors
- Cleaner and more readable step definitions
- Easier adaptation to framework or UI changes

---

## Scenario Tagging and Test Organization

Cucumber scenario tags are used to organize and control test execution in a way that reflects real QA workflows.

In this project:

- `@smoke` scenarios cover critical business paths such as **login**, **signup**, and **fund transfers**.
- Tags allow selective execution depending on the testing scope (e.g. quick validation vs full regression).
- The structure supports future extension to regression suites or parallel execution, if required.

This tagging strategy helps keep the test suite flexible and execution-focused.

---

## QA Decisions and Findings

During test execution, system behaviors were evaluated critically rather than forcing tests to pass.

Notable QA decisions include:

- Negative login scenarios were documented as known limitations due to the **Parabank demo environment** allowing access with invalid credentials.
- Automated tests were **not modified to mask incorrect behavior**, preserving test integrity.
- Observed issues and limitations were documented and tracked in **Jira**, maintaining transparency and traceability.

This approach ensures that test results reflect actual system behavior, not artificial success.
