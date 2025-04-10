import { APIRequestContext, expect } from '@playwright/test';

export async function getCategoryDetails(request: APIRequestContext, id: string) {
  const response = await request.get(`/v1/Categories/${id}/Details.json?catalogue=false`);
  expect(response.ok()).toBeTruthy();
  return response.json();
}
