// web scraping is a technique used to collect content and data from the server

//node fetch is used to fetch html or source code  from the server and then load it into cheerio
//and cheerio is used to select the specific content from the server by using the selector

import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

async function getFormulaOneDrivers(){
    try{
        
        const response = await fetch('https://www.formula1.com/en/drivers.html');
        const body = await response.text();
        const $ = cheerio.load(body);

        const wrapper = $('.listing-items--wrapper');

    } catch(err){
        console.log(err);
    }
}

getFormulaOneDrivers();