import { test } from 'vitest';
import fs from 'fs';
import readline from 'readline';
import https from 'node:https';
import history from '../models/history';
import downloadProductsService from './downloadProductsService';


const fetchNewProducts = async(): Promise<void> =>{
    const input = fs.createWriteStream('./index.txt');
    const SITE_URL = 'https://challenges.coode.sh/food/data/json/index.txt';
    const res = https.get(SITE_URL, (response) => {
         response.pipe(input);
         input.on('close',async() => {
          
    const storeHistory:any =  []; 
    const fileLine =  readline.createInterface({
        input: fs.createReadStream('./index.txt')
    });
    
    for await(let line of fileLine){
        let hist = await history.findOne({name:line})
        if(!hist){
            storeHistory.push(line.split(','));
            history.create({name:line});
        }
    }
        console.log('cron executando...');
       downloadProductsService(storeHistory);
    });

    });
    
}
export default fetchNewProducts;