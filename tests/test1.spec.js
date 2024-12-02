const { test, expect } = require('@playwright/test');
const { Main } = require('../pageObjects/main');

test('checkDescription1', async ({ page }) => {

    const main = new Main(page);
    // перехід на головну сторінку
    await page.goto('');
    // Пошук локатора
    const description = await page.locator('[name="description"]');
    // Отримуємо дані/текст/значення, які містяться в description
    const contentValue = await description.getAttribute('content');
    // Перевіряємо, чи в description є текст 'Доставка по всій Україні'
    expect(contentValue).toContain(main.constants.searchText);
});
