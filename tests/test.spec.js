 const { test, expect } = require('@playwright/test');

test('checkDescription', async ({ page }) => {

   // перехід на головну сторінку
    await page.goto('https://rozetka.com.ua/ua/');
    //пошук локатора
    const description = await page.locator('[name="description"]');
    //отримуєм дані/текст/значення які містяться в description
    const contentValue = await description.getAttribute('content');
    //перевіряємо чи в description є текст 'Доставка по всій Україні'
    expect(contentValue).toContain('Тест негативний сценарій');
});
