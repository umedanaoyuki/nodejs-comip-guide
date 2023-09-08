import { chromium } from "@playwright/test";

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("https://localhost:3000");
const htmlStr = await page.content();

console.log(htmlStr);




