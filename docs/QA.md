# QA Approach

This project applies a practical Quality Assurance approach focused on functional coverage, test independence, maintainability, and clear validation of expected application behavior.

The automated test suite is built using **Cypress with Cucumber (BDD)**. Feature files describe expected behavior from a user perspective, while step definitions contain the implementation required to execute those scenarios.

---

## Behavior-Driven Development (BDD) with Gherkin

Gherkin is used to describe application behavior in a readable and structured format.

The current scenarios cover user-facing functionality such as:

- Login
- Customer registration
- Fund transfers

The feature files focus on **what the user expects to accomplish**, while the step definitions handle the Cypress implementation.

Both positive and negative behavior are covered where applicable.

For example, the Login feature includes:

- Successful authentication with valid credentials
- Validation of an unsuccessful login attempt with invalid credentials

---

## Test Independence

Tests are designed to minimize unnecessary dependencies between scenarios.

For example, the Login scenarios use the existing ParaBank demo credentials rather than creating a new user through the Signup flow before every login test.

This keeps the Login tests focused on authentication and prevents failures in the registration flow from affecting the login tests.

The Signup scenario independently validates the customer registration flow using dynamically generated usernames to avoid username collisions between executions.

---

## Assertions and Validation

Assertions are focused on observable application behavior and expected results.

Examples include:

- Verifying that a valid login displays the expected welcome message.
- Verifying that an invalid login displays the expected error message.
- Verifying that a newly registered account displays the successful registration message.
- Verifying that a fund transfer displays the expected transfer confirmation.

This helps ensure that tests validate actual application outcomes rather than only checking that an interaction was performed.

---

## Test Organization

The test suite is organized into separate feature files according to application functionality:

```text
features/
├── login.feature
├── signup.feature
└── transfer_funds.feature
```

Step definitions are kept separately from feature files:

```text
steps/
├── login.js
├── signup.js
└── transfer_funds.js
```

This separation keeps business-readable scenarios independent from their technical implementation.

---

## Scenario Tags

Cucumber tags are currently used to categorize scenarios:

- `@smoke`
- `@regression`

The tags provide categorization within the feature files, although tag-based selective execution is not currently configured in the project.

For this reason, test execution currently relies on running the complete suite or selecting individual feature files.

---

## QA Decisions

Several design decisions were made to keep the automated tests focused and maintainable:

- Login tests do not depend on the Signup flow.
- Signup uses dynamically generated usernames to reduce test-data collisions.
- Assertions validate visible application outcomes rather than only user interactions.
- Feature files describe business behavior instead of implementation details.
- The project avoids unnecessary abstraction where the current test scope does not require it.
- Known limitations of the demo application are not hidden by modifying assertions to artificially produce passing results.

These decisions aim to keep the suite simple, understandable, and representative of practical frontend test automation.
