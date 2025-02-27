import Product from "../models/productModel.js";

// Get All Products
export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({success: true, products})
};

// Creating Products
export const createProducts = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({success: true, product});
}

export const getSingleProduct = (req, res) => {
  res.status(200).json({message: "Single Product"});
}

// Update Product
export const updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found"
    })
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  res.status(200).json({success: true, product})
}