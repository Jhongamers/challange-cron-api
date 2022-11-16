import { Router } from "express";
import productController from "./controller/productController";

const routes = Router();

routes.get('/',productController.index);
routes.get('/products', productController.get);
routes.get('/products/:code', productController.findByCode);
routes.delete('/products/:code', productController.delete);
routes.put('/products/:code', productController.update);



routes.get('/product');

export default routes;