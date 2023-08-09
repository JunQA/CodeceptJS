Feature('login');

import { userName, userEmail, currentAddress } from '../framework/fixtures';
import { baseURL } from '../framework/config';

Before(async ({ I }) => {
  await I.amOnPage(baseURL + 'text-box');
});

Scenario('the field must be able to be filled in', async ({ I }) => {
    // create a new locators
    const userNameInput = locate('input[placeholder="Full Name"]');
    const userEmailInput = locate('input[placeholder="name@example.com"]');
    const currentAddressInput = locate('textarea[placeholder="Current Address"]');
    const submitButton = locate('button[type="submit"]');
  
    // click and input name
    await I.click(userNameInput);
    await I.waitForTimeout(2000);
    await I.seeElementFocused(userNameInput);
  
    await I.fillField(userNameInput, userName);
    await I.seeInField(userNameInput, userName);
  
    // click and input email
    await I.click(userEmailInput);
    await I.waitForTimeout(2000);
    await I.seeElementFocused(userEmailInput);
  
    await I.fillField(userEmailInput, userEmail);
    await I.seeInField(userEmailInput, userEmail);
  
    // click and input address
    await I.click(currentAddressInput);
    await I.waitForTimeout(2000);
    await I.seeElementFocused(currentAddressInput);
  
    await I.fillField(currentAddressInput, currentAddress);
    await I.seeInField(currentAddressInput, currentAddress);
  
    // hover and click submit button
    await I.hover(submitButton);
    await I.waitForTimeout(2000);
    await I.click(submitButton);
    await I.see('Submit', submitButton);
  });
  
  After(async () => {
    console.log('Done with tests');
  });