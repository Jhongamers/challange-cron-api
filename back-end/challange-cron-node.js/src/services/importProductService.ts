import product from '../models/product';
import productInterface from '../interface/productInterface';
import JSONStream from 'JSONStream';
import downloadProductsService from './downloadProductsService';
import history from '../models/history';

  const importProductService = async (readFileStream,filename): Promise<void> => {
        let storeProducts:productInterface[] = [];
    const jsonStream = JSONStream.parse();
    readFileStream.pipe(jsonStream);

      jsonStream.on('data', (data) => {
              storeProducts.push({
              code: Sanitize(data.code),
              status:undefined,
              imported_t:undefined,
              url:data.url,
              creator: data.creator,
              created_t: data.created_t,
              last_modified_t: data.last_modified_t,
              product_name: data.product_name,
              quantity: data.quantity,
              brands: data.brands,
              categories: data.categories,
              labels: data.labels,
              cities: data.cities,
              purchase_places: data.purchase_places,
              stores: data.stores,
              ingredients_text: data.ingredients_text,
              traces: data.traces,
              serving_size: data.serving_size,
              serving_quantity: data.serving_quantity,
              nutriscore_score:data.nutriscore_score,
              nutriscore_grade: data.nutriscore_grade,
              main_category: data.main_category,
              image_url: data.image_url
            });
            if(storeProducts.length==1e2){
            jsonStream.end();
           }   
       }).on('end', async() => {   
        try{
         for await(let storeProduct of storeProducts){
            await product.create(storeProduct);
          }
       
        }catch(err){
         console.log('error when trying to save data, error on line: '+err.stack);
        }
       });
       await history.create({name:String(filename[0])}).then((res) => {
        if(res){
       filename.shift();
       downloadProductsService(filename);
        }
       })

  }

    function Sanitize(string) {
    let removeQuote = string.replace('"','');
        return  removeQuote;
  }

export default importProductService;