import puppeteer from 'puppeteer';

describe('Page start', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('test', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('body'); // в видео-уроке await page.waitFor - заменил
  });

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.innogrn-form-widget'); // в видео-уроке await page.waitFor - заменил
  });

  test('Form input should add .valid class if inn is valid', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForTimeout('.innogrn-form-widget');

    // const form = await page.$('.innogrn-form-widget');
    // const input = await form.$('.input');
    // const submit = await form.$('.submit');

    // await input.type('7715964180');
    // await submit.click();

    // await page.waitForTimeout('.innogrn-form-widget .input.valid')
  });

  afterEach(async () => {
    await browser.close();
  });
});
