const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  await page.goto("https://nikkuag.github.io/Wack-A-Mole/");

  await page.click("button");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  async function clickMoles() {
    while (true) {
      const holesUp = await page.$$("div.hole.up");
      for (let hole of holesUp) {
        await hole.click();
        console.log("Mole hit!");
      }
      await delay(50);
    }
  }

  // Start smashing moles AND beat that HIGH SCORE !!!!
  clickMoles();
})();
