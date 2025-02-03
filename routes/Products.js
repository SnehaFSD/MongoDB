import { getAllProducts, getProductById, deleteProductById, addProducts,updateProducts } from "../helper.js";
import express from "express"
const router = express.Router()

//-------------REST API endpoints-------
//products => all the products✅
router.get('/', async (req, res) => {
  const { category, rating } = req.query;
  console.log(req.query, category); // Debugging output
  const result = await getAllProducts(req); //in above connection is made in client so client is used
  res.send(result); // Return the filtered products
});

//to get products by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(req.params, id);
  //db.products.findOne({id : "1"}) // This is a mongodb query
  const product = await getProductById(id); //in above connection is made in client so client is used

  // const product = products.find((pd) => pd.id === id)
  product ? res.send(product) : res.status(404).send({ message: "No product found" });
});

//to delete products by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(req.params, id);
  //db.products.findOne({id : "1"}) // This is a mongodb query
  const product = await deleteProductById(id); //in above connection is made in client so client is used

  // const product = products.find((pd) => pd.id === id)
  res.send(product);
});

//---------------------Add Products-----------------------------------------
//to Add products
router.post('/', async (req, res) => {
  const { id } = req.params;
  const newProducts = req.body;
  console.log(newProducts);
  const result = await addProducts(newProducts);
  res.send(result);
});

//Update method
router.put('/:id', async (req, res) => {
  const updatedProducts = req.body;
  console.log(updatedProducts);
  const result = await updateProducts(id, updatedProducts);
  res.send(result);
});

export const productsRoute = router //this product route is called in index.js