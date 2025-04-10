import { test as base } from '@playwright/test';
import type { APIRequestContext } from '@playwright/test';

export const test = base.extend<{
  api: APIRequestContext;
}>({
  api: async ({ playwright }, use) => {
    const context = await playwright.request.newContext();
    await use(context);
    await context.dispose();
  },
});

export { expect } from "@playwright/test"