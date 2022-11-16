import { Request, Response } from 'express';
import product from '../models/product';
import CronService from '../services/cronService';

const productController = {

    async index(req: Request, res: Response) {
        res.json(CronService.readCronFile());
    },
    async get(req: Request, res: Response): Promise<Response> {
        const page = Number(req.query.page) || 1;
        const limit = 8;
        const endIndex = page * limit;
        
        const products = await product.find({})
        .skip((page - 1) * limit)
        .limit(limit);
        const count = await product.countDocuments();
        let totalPages = Math.ceil(count / limit);
        if(products.length<=0){
             return res.status(404).json({
                message:'there is no record here',
                status: 404,
               });
        }
               
        return res.status(200).json({products,totalPages:totalPages,currentPage:page,limit:limit});
    },
    async findByCode(req: Request, res: Response): Promise<Response> {
        const { code } = req.params;
        const products = await product.find({ code: code });
        if(products.length<=0){
           return res.status(404).json({
                message:'there is no record please check your code',
                status: 404,
               });
        }
        return res.status(200).json(products);

    },

    async update(req: Request, res: Response): Promise<Response> {
        const { code } = req.params;
        const products = await product.findOneAndUpdate({ code: code }, req.body);
        return res.status(200).json(products);

    },

    async delete(req: Request, res: Response): Promise<Response> {
        const { code } = req.params;
        const products = await product.update({ code: code }, {
            status: 'trash'
        });
        if(products.matchedCount<=0){
            return res.status(404).json({
                message:'there is no record please check your code',
                status: 404,
               });
        }
     
        return res.status(200).json(products);

    },


}
export default productController;