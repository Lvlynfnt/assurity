# Assurity Automated API Test

This project contains automated API tests that validate correct API responses, including status code, message, body, etc. We're using **Node.js** as the runtime environment and **Playwright** as the automation framework, with **TypeScript** as the scripting language.

## How to Run

1. Clone this project by running:
   ```bash
    git clone https://github.com/Lvlynfnt/assurity.git
    ```
2. Install dependencies:
  ```bash
  npm install
  ```
3. Run tests in headless:
  ```bash
  npx playwright test
  ```
  Optionally, add `--ui` to run in UI/headed mode:

## Files

- `tests/` - Contains all the test specs
- `fixtures/` - Contains playwright fixtures for reusable test setups
- `helpers/` - Global utility functions

### Test Case Structure

For better readability, we use a data-driven approach by defining expected values at the top of the test logic. This structure also prepares the test case for a combinatorial testing approach, making the test steps reusable with different sets of input data.


```js
import { test, expect } from '../fixtures';
import { getCategoryDetails } from '../helper/helper';

// Test data oor expected values
const data = {
  id: '6327',
};

const expected = {
  name: 'Carbon credits',
  galleryName: 'Gallery', 
  description: 'Good position in category',
  canRelist: true,
};

// Test Steps
test.describe('check category details from api response', () => {  
  test(`name should be ${expected.name} `, async ({ request }) => {
    const body = await getCategoryDetails(request, data.id);
    expect(body.Name).toBe(expected.name);
  });
  test(`canRelist should be ${expected.canRelist}`, async ({ request }) => {
    const body = await getCategoryDetails(request, data.id);
    expect(body.CanRelist).toBe(expected.canRelist);
  });
});