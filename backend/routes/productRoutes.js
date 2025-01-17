import express from 'express';
import { createProducts, getAllProducts, getSingleProduct, updateProduct } from '../controller/productController.js';

const router = express.Router();

router.route("/products").get(getAllProducts).post(createProducts);
router.route("/product").get(getSingleProduct);
router.route("/product/:id").put(updateProduct);

export default router;