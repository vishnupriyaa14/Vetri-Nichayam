const express = require("express");
const mongoose = require("mongoose");
const app = express(); 
app.use(express.json()); 
const userRouter = require("./Routes/userRoutes");
app.use("/user", userRouter);


mongoose.connect("mongodb://localhost:27017/vishnupriya")
  .then(() => {
    console.log("Connected to mongoDb");
  })
  .catch((err) => console.log("Error while connecting to MongoDb", err));


const PORT = 8000;
app.get("/get-users", (req, res) => {
  res.send("This is from get-users ");
});

app.post("/create-user", (req, res) => {
  res.send("This is from create-user");
});

app.put("/update-user/:id", (req, res) => {
  res.send("This is from update user");
});

app.delete("/delete-user/:id", (req, res) => {
  res.send("This is delete user");
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});