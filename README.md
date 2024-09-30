# Sauce Demo E2E Test Suite

This project contains end-to-end (E2E) automated tests for the [Sauce Demo](https://www.saucedemo.com) website. The tests are written using [Playwright](https://playwright.dev/), leveraging the **Page Object Model (POM)** design pattern for clean and maintainable code.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Running Tests in Parallel](#running-tests-in-parallel)
- [Recording New Tests](#recording-new-tests)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview
This project tests key functionalities of the Sauce Demo web application. It verifies:
- User login functionality.
- Adding items to the cart.
- Verifying cart contents.
- Completing the checkout process.

The test suite is implemented using the **Page Object Model** (POM), making the test logic reusable and scalable.

## Features
- **End-to-End Tests**: Covers the main flows (Login, Add to Cart, Checkout).
- **Page Object Model (POM)**: Structured design pattern for better test maintenance.
- **Parallel Test Execution**: Speeds up test execution.
- **Cross-Browser Testing**: Can run tests in Chromium, Firefox, and WebKit.

---

## Folder Structure

```bash
project-root/
│
├── pages/                   # Page Object Models (POM)
│   ├── loginPage.js          # Login Page Object
│   ├── inventoryPage.js      # Inventory Page Object
│   └── checkoutPage.js       # Checkout Page Object
│
├── tests/                   # Playwright test files
│   ├── loginTest.spec.js     # Tests for Login
│   ├── cartTest.spec.js      # Tests for Cart functionality
│   └── checkoutTest.spec.js  # Tests for Checkout functionality
│
├── utils/                   # Utility functions (if needed)
├── playwright.config.js     # Playwright configuration
├── package.json             # Dependencies and scripts
└── README.md                # Documentation (this file)
```

---

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [Git](https://git-scm.com/) (for cloning the repository)

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/sauce-demo-e2e.git
   cd sauce-demo-e2e
   ```

2. **Install Dependencies**:
   Install the required Node.js dependencies using npm:
   ```bash
   npm install
   ```

3. **Install Playwright Browsers**:
   Playwright provides bundled browser binaries, which need to be installed:
   ```bash
   npx playwright install
   ```

---

## Running Tests

You can run the tests using Playwright’s CLI. Below are some common commands:

### Run All Tests:
```bash
npx playwright test
```

### Run Specific Tests:
To run a specific test file:
```bash
npx playwright test tests/loginTest.spec.js
```

### Run Tests with Headed Browser:
By default, Playwright runs tests in headless mode. To run in headed mode:
```bash
npx playwright test --headed
```

### Run Tests in a Specific Browser:
To run the tests in a specific browser (Chromium, Firefox, WebKit):
```bash
npx playwright test --project=firefox
```

---

## Running Tests in Parallel

To optimize the test suite's performance, Playwright allows tests to run in parallel. You can adjust the parallelism in the `playwright.config.js` file. By default, Playwright detects the number of available CPUs.

To run tests in parallel:
```bash
npx playwright test --workers=4
```

This will run the tests with 4 workers in parallel.

---

## Recording New Tests

To record new tests using Playwright's code generation tool, run the following command:
```bash
npx playwright codegen https://www.saucedemo.com/
```
This will open a browser and generate Playwright code based on your interactions with the site.

---

## Code Quality

We use **ESLint** to ensure the test suite adheres to JavaScript best practices. You can check code quality by running:

### Install ESLint:
```bash
npm install eslint --save-dev
```

### Check for Linting Issues:
```bash
npx eslint .
```

You can also configure ESLint rules in the `.eslintrc.json` file according to your project's needs.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

### Troubleshooting
- **Timeout Issues**: If a test times out, consider increasing the `timeout` value in `playwright.config.js`.
- **Test Failures**: Use the Playwright Trace Viewer to debug test failures:
  ```bash
  npx playwright show-trace trace.zip
  ```

---

This `README.md` file should provide comprehensive instructions for setting up, running, and contributing to your Playwright test suite for the Sauce Demo website.
