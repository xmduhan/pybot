const { chromium } = require('playwright');

(async () => {
  try {
    // 使用 Playwright Remote Server 的 WebSocket 地址
    const browser = await chromium.connect('ws://127.0.0.1:4000/playwright');

    // 创建一个新上下文和页面
    const context = await browser.newContext();
    const page = await context.newPage();

    // 跳转到指定网站
    await page.goto('https://example.com');
    console.log('Page title:', await page.title());

    // 关闭浏览器
    await browser.close();
  } catch (error) {
    console.error('Error:', error);
  }
})();
