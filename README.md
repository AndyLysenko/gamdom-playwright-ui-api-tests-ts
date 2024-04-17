# Gamdom Playwright UI & API Tests (TypeScript)

## About

This repository, `gamdom-playwright-ui-api-tests-ts`, hosts a demo of UI and API tests for the [Gamdom.com](https://www.gamdom.com) gaming platform. UI tests are written using Playwright and TypeScript, API tests are written Jest and TypeScript showcasing automated testing strategies for both UI and API interactions.

The project was created as part of a task to evaluate expertise in UI test automation, understanding of requirements, ability to derive critical functionality from exploratory testing, and skills in API testing and automation.

## Technologies

- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)

## Approach

The project is divided into two main parts: UI tests and API tests. The tests use a Data Driven approach, with test data stored in JSON files, allowing for easy addition of new test cases.

The UI tests follow the Page-Object pattern, creating an abstraction of the tested page for more readable, maintainable, and reusable tests.

### UI Tests

UI tests were created based on exploratory testing of the Gamdom website.

### API Tests

API tests focus on the JIRA Issues API. A meaningful workflow encompassing CRUD operations of the Issues feature was created. Four to five endpoints were chosen and automated using Playwright's API capabilities.

## Project Structure

- `api-tests`: Contains the API tests and related files.
- `e2e-tests`: Contains the UI tests and related files.
- `node_modules`: Contains the project dependencies.
- `package.json`: Defines the project dependencies and scripts.
- `tsconfig.json`: Provides configuration settings for the TypeScript compiler.
- `jest.config.js`: Contains the Jest testing framework configuration.
- `playwright.config.ts`: Contains the Playwright testing tool configuration.
- `.github`: Contains GitHub-specific metadata, such as GitHub Actions workflows.
- `.eslintrc.json`: Contains the ESLint linter configuration.
- `.env`: Contains environment variables for the project.

## Setup

1. Clone the repository: `git clone https://github.com/AndyLysenko/gamdom-playwright-ui-api-tests-ts.git`
2. Navigate to the project directory: `cd gamdom-playwright-ui-api-tests-ts`
3. Install the dependencies: `npm install`
4. Update the `JIRA_DEMOQA_TOKEN` in the `.env` file at the root of the project with your actual JIRA token. If you preferred, set `JIRA_DEMOQA_TOKEN` as an environment variable in your system settings.

## Running the Tests

- To run all API tests: `npm run test:api`
- To run all UI tests on all platforms in headless mode: `npm run test:ui`

There are many more options for running the tests, which you can find in the `package.json` file. Here are some examples:

- To run the UI tests with a user interface: `npm run test:ui:ui`
- To run the UI tests in headed mode: `npm run test:ui:headed`
- To run the UI tests with Chrome: `npm run test:ui:chrome`
- To run the UI tests with Chrome in headed mode: `npm run test:ui:headed:chrome`
- To run the UI tests with Firefox: `npm run test:ui:firefox`
- To run the UI tests with Firefox in headed mode: `npm run test:ui:headed:firefox`
- To run the UI tests in debug mode: `npm run test:ui:debug`
- To run the UI tests with a dot reporter: `npm run test:ui:ci`
- To clean the test results: `npm run test:ui:clean`
- To generate a report of the test results: `npm run test:ui:generate-report`

## Code Quality

Code quality is maintained using ESLint. To run the linter, use the command: `npm run lint`

## Reporters

Test results are reported and stored in corresponding folders for each test run. The configuration for these reporters can be found in the `playwright.config.ts` and `jest.config.js` files.

In `playwright.config.ts`, you can specify the type of reporter you want to use for your Playwright tests. You can choose from a variety of built-in reporters or even use a custom reporter.

In `jest.config.js`, you can specify the type of reporter you want to use for your Jest tests. Jest also supports a wide range of reporters, including custom ones.

By configuring these reporters, you can customize how your test results are reported and stored, making it easier to understand the outcome of your tests and identify any issues.

## GitHub Actions

This project uses GitHub Actions for continuous integration. Workflow definitions for both API and UI tests are included in the `.github/workflows` directory. The specific files are `api-tests.yml` for API tests and `playwright-tests.yml` for UI tests.

These workflows showcase real test execution workflows, automatically running the tests on every push to the repository and providing feedback on the results. This helps to ensure the quality of the code and catch issues early.

You can view the results of these workflows in the "Actions" tab of the GitHub repository.

## Useful Links

- [Playwright API](https://playwright.dev/docs/api/class-playwright)
- [JIRA Issues API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/)

## License

This project is licensed under the terms of the MIT license. See [LICENSE](LICENSE) for more details.