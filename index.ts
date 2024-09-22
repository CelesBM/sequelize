import * as express from "express";
import { sequelize } from "./db";
import { Product } from "./db/product";

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Sincronización realizada");
  })
  .catch((error) => {
    console.error("Error de sincronización:", error);
  });

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/products", async (req, res) => {
  const allProducts = await Product.findAll();
  res.json(allProducts);
  console.log(allProducts);
});

app.post("/products", async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.json(newProduct);
  console.log(newProduct);
});

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({
    where: { id },
  });
  res.json(product);
});

app.patch("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;
  const product = await Product.update({ price }, { where: { id } });
  const updatedProduct = await Product.findOne({ where: { id } });
  res.json(updatedProduct);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.destroy({ where: { id } });
  res.json("Producto eliminado exitósamente.");
});

app.listen(port, () => {
  console.log("App listening at port:", port);
});
