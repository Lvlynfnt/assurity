import { test, expect } from '../fixtures';
import { getCategoryDetails } from '../helper/helper';

const data = {
  id: '6327',
};

const expected = {
  name: 'Carbon credits',
  galleryName: 'Gallery', 
  description: 'Good position in category',
  canRelist: true,
};

test.describe('check category details from api response', () => {  
  test(`name should be ${expected.name} `, async ({ request }) => {
    const body = await getCategoryDetails(request, data.id);
    expect(body.Name).toBe(expected.name);
  });
  test(`canRelist should be ${expected.canRelist}`, async ({ request }) => {
    const body = await getCategoryDetails(request, data.id);
    expect(body.CanRelist).toBe(expected.canRelist);
  });
  test(`gallery name should have ${expected.description} description`, async ({ request }) => {
    const body = await getCategoryDetails(request, data.id);
    const galleryPromotion = body.Promotions.find(promotion => promotion.Name === 'Gallery');
    expect(galleryPromotion.Description).toContain(expected.description);
  });
});
