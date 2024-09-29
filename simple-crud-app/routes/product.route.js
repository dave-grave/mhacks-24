const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// get data of product
router.get("/", getProducts);
router.get("/:id", getProduct);

// create a new product
router.post("/", createProduct);

// update value of existing product
router.put("/:id", updateProduct);

// delete an existing product
router.delete("/:id", deleteProduct);

module.exports = router;
