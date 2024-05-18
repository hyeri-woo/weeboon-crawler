import { load } from "cheerio";
import puppeteer from "puppeteer";

const init = async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://comic.naver.com/webtoon?tab=mon')
        const content = await page.content();
        const $ = load(content);
        console.log(content);
        await browser.close();
    } catch (error) {
        console.error(error)
    }
}

const getWebtoonInfoFromNaver = async () => {
    await init();
}

getWebtoonInfoFromNaver();