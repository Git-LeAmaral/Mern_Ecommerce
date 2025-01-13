import express from 'express';
import { createProducts, getAllProducts, getSingleProduct } from '../controller/productController.js';

const router = express.Router();

router.route("/products").get(getAllProducts).post(createProducts);
router.route("/product").get(getSingleProduct);

export default router;