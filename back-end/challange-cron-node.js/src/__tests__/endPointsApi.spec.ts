import dotenv from 'dotenv';
import { describe, beforeAll, it, expect } from 'vitest';
import app from '../server';
import request from 'supertest';
import dbconnect from '../repository/db';

dotenv.config();
beforeAll(() => {
  dbconnect();
})
describe('end points api', () => {

    it('get all product', async () => {
      const res = await request(app).get('/products');
       expect(res.status).toEqual(200);
       expect(res.body.length).greaterThan(0);
    });

    it('get product by code', async () => {
      const res = await request(app).get('/products/123');
       expect(res.status).toEqual(200);
       expect(res.body.length).greaterThan(0);
    });
    it('update by code', async () => {
      const res = await request(app).put('/products/123').send({
          product_name:'test',
      });
      expect(res.body.product_name).toEqual('test');
      expect(res.status).toEqual(200);
    });

    it('delete user by code', async () => {
      const res = await request(app).delete('/products/123').send({
          status:'trash',
      });

      expect(res.status).toEqual(200);
     
    });
});