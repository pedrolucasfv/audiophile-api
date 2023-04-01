const express = require("express");

const router = express.Router();

const Produto = require("../models/Produto");

router.get("/", async (req, res) => {
  try {
    let produtos = await Produto.find({});
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  let { name, description, price, image, productID, category } = req.body;
  try {
    let produto = await Produto.create({
      name,
      description,
      price,
      image,
      productID,
      category,
    });
    res.status(200).json(produto);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get("/:productID", async (req, res) => {
  let { productID } = req.params;
  try {
    let produto = await Produto.findOne({ productID });
    res.status(200).json(produto);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.put("/:productID", async (req, res) => {
  let { name, description, price, image, category } = req.body;
  let { productID } = req.params;
  try {
    let produto = await Produto.findOneAndUpdate(
      { productID },
      { name, description, price, image, category },
      { new: true }
    );
    res.status(200).json(produto);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.delete("/:productID", async (req, res) => {
  let { productID } = req.params;
  try {
    let produto = await Produto.findOneAndDelete({productID});
    res.status(200).json(produto);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
