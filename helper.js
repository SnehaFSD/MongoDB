import { client } from "./index.js";

 async function getAllProducts(req) {
  return await client.db("my-first-db").collection("products").find(req.query).toArray();
}
 async function getProductById(id) {
  return await client.db("my-first-db").collection("products").findOne({ id: id });
}
 async function deleteProductById(id) {
  return await client.db("my-first-db").collection("products").deleteOne({ id: id });
}
 async function addProducts(newProducts) {
  return await client.db("my-first-db").collection("products").insertMany(newProducts);
}

async function updateProducts(id,updatedProducts) {
  return await client.db("my-first-db").collection("products").updateOne({id : id},{$set : updatedProducts});
}

export { getAllProducts, getProductById, deleteProductById, addProducts,updateProducts }