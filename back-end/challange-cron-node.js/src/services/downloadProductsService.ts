import gunzip  from 'gunzip-file';
import fs from 'fs';
import https from 'node:https';
import importProductService from './importProductService';


//this line is responsible for downloading our file update

 const downloadProductsService = (filename) => {
//checks the state of our queue so it can run
    if(filename.length >0){

            console.log('qual sua stack'+filename[0]);
            const input = fs.createWriteStream(`./${filename[0]}`);
            let SITE_URL = `https://challenges.coode.sh/food/data/json/${filename[0]}`;
            const res =  https.get(SITE_URL, (response) => {
              console.log('passou aqui')
              response.pipe(input);
            
              console.log(filename);
              input.on('finish',() => {
                decompileFile(filename);
                   console.log('esta aqui');
               });
          });
} 
}
  // this line decompile our file 
 const decompileFile = (filename) => {
        //sanetize remove .gz of filename;
     const sanetizeFilename = filename[0].toString().replace('.gz','');
    console.log('esta aqui acima do gz');
    gunzip(filename[0].toString(), sanetizeFilename, () => {
      console.log('esta aqui');
      
      // delete zip and import Products to mongodb;
      fs.unlink(`./${filename[0]}`,() => {
        const readFileStream = fs.createReadStream(`./${sanetizeFilename}`, {encoding: 'utf-8'});
        importProductService(readFileStream,filename);
      })

    
      console.log(filename[0])
      console.log('terminou e passa pro proximo');
    })
    
}


export default downloadProductsService;