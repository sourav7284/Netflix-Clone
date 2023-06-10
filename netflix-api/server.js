const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/netflixclone", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.error("DB Connetion Successfull");
  })
  .catch((err) => {
    console.error(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.error("server started on port 5000");
});