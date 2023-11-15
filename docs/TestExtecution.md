# Tests execution

Given all the scenarios are tagged, the tests execution is pretty flexible by using "npm test" command.

## Test Suites

This project uses different test suites to categorize and organize tests based on their purposes.

- `@smoke`: This suite contains tests that ensure the core functionality of the application is healthy. Smoke tests are designed to provide quick feedback about the stability of the system, focusing on essential functionalities.

- `@regression`: The regression test suite consists of alternative and error validation tests. These tests ensure that the entire application remains healthy after new changes are introduced. Regression tests help catch unintended side effects and ensure the overall stability of the application.

### Running Specific Test Suites

You can run specific test suites using tags when executing Cypress tests. For example:

- Run all test cases `npm test`.
- Run Smoke test suite `npm test -- -t @smoke`.
- Run Regression test suite `npm test -- -t @regression`.
