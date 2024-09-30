
# End-to-End Test Suite with Playwright

This repository contains an End-to-End (E2E) test suite built using Playwright, an open-source browser automation tool that allows for fast, reliable testing across web applications. The suite includes comprehensive tests for login, inventory management, and cart functionalities.

## Prerequisites

Before running the test suite, ensure the following dependencies are installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **Playwright**: Installed via npm (as shown in setup instructions)
- **VS Code** (optional): Recommended for code editing and debugging

## Installation

To get started with the test suite, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd your-repo-name
   ```

3. **Install Dependencies:**

   Install Playwright and other required packages by running:

   ```bash
   npm install
   ```

   This will also install the necessary browsers to run the tests.

4. **Set up Playwright:**

   Playwright needs to download browser binaries for Chromium, Firefox, and WebKit. Run the following command to ensure everything is set up correctly:

   ```bash
   npx playwright install
   ```

## Running Tests

You can run all tests or specific ones using Playwright’s CLI commands.

- **Run all tests:**

  ```bash
  npx playwright test
  ```

- **Run a specific test file:**

  ```bash
  npx playwright test tests/login.spec.ts
  ```

- **Run tests in headed mode (with the browser visible):**

  ```bash
  npx playwright test --headed
  ```

- **Run tests for a specific browser:**

  ```bash
  npx playwright test --browser=firefox
  ```

## Test Structure

The test suite is organized as follows:

- **Login Tests**: Ensure that users can log in successfully and handle invalid login scenarios.
- **Inventory Tests**: Validate that inventory data is displayed correctly, and items are interactable.
- **Cart Tests**: Check that items can be added to and removed from the cart, and the total price is calculated correctly.

## Folder Structure

`project-root/
│
├── pages/                       # Stores all page objects (POM)
│   ├── basePage.js             # Optional base page for shared logic
│   ├── loginPage.js             # Page object for the login page
│   ├── inventoryPage.js         # Page object for the inventory page
│   └── checkoutPage.js          # Page object for the checkout page
│
├── tests/                       # Stores test cases
│   ├── sauceDemo.spec.js        # Tests related to login functionality
│  
├── utils/                       # Utility functions, helper scripts, or constants
│   └── testUtils.js
│
├── playwright.config.js         # Playwright configuration file
├── package.json                 # Node.js package file for managing dependencies
└── README.md                    # Instructions on how to use the test suite

## Playwright Configuration

Playwright configuration is handled in the `playwright.config.ts` file. This includes settings for:

- **Browser type**: Configure Chromium, Firefox, or WebKit
- **Timeouts**: Customize timeouts for actions like clicks, navigation, etc.
- **Headless mode**: Whether the browser runs in headless mode by default
- **Test reporters**: Define output formats such as list, HTML report, etc.

## Debugging Tests

Playwright provides various debugging features:

- **Run in headed mode** to see the browser's actions.
- **Use the `--debug` flag** to pause the test and inspect elements:

  ```bash
  npx playwright test --debug
  ```

## Reporting

Playwright supports generating reports for test runs. To generate an HTML report, run:

```bash
npx playwright show-report
```

## Contributing

If you'd like to contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For questions or issues, please contact  bayzidmohammad695@gmail.com

---

This `README.md` provides a clear overview of your project, installation steps, and instructions for running the tests, making it easy for others to get started. You can adjust the repository link and contact details as needed.