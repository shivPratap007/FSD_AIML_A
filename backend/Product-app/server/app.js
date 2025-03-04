const express = require("express");
const port = 3000;
const app = express();
app.use(express.json());

const product = [
  {
    id: 1,
    title: "laptop",
    price: 50000,
    quantity: 10,
  },
  {
    id: 2,
    title: "mobile",
    price: 5000,
    quantity: 12,
  },
  {
    id: 3,
    title: "smart watch",
    price: 5000,
    quantity: 10,
  },
];

app.get("/products", (req, res) => {
  res.status(200).json(product);
});

app.post("/products", (req, res) => {
  const newProduct = {
    id: product.length + 1,
    title: req.body.title,
    price: req.body.price,
    quantity: req.body.quantity,
  };

  product.push(newProduct);
  res.status(201).json(newProduct);
});

app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const productf = product.find((p) => p.id === productId);
  if (productf) {
    res.status(200).json(productf);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.patch("/editproduct/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const { title, price, quantity } = req.body;
  if (!title || !price || !quantity) {
    return res.status(400).json({ error: "Please provide all details" });
  }
  const productIndex = product.findIndex((p) => p.id === productId);
  if (productIndex !== -1) {
    product[productIndex].title = title;
    product[productIndex].price = price;
    product[productIndex].quantity = quantity;
    res.status(200).json("Data updated successfully");
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.delete("/deleteproduct/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = product.findIndex((p) => p.id === productId);
  if (productIndex !== -1) {
    product.splice(productIndex, 1);
    res.status(200).json("Product deleted successfully");
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
