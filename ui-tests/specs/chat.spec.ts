import { expect } from '@playwright/test';
import { test } from '../fixtures/global.fixture';
import { ChatWindow } from '../pages/components/chat-window';

test('chat - unauthorised user cant send message', async ({ homePage, page }) => {
  await homePage.openChat();

  const chatWindow = new ChatWindow(page);
  await chatWindow.verifyPageOpen();

  expect(await chatWindow.isInputActive()).toBeFalsy();
});