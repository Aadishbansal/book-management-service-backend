const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const app = require("./app");

// dotenv.config({ path: path.join(__dirname, "config", ".env") });

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL)
  .then((client) => {
    app.listen(port, () => console.log("server running : " + port));
  })
  .catch((err) => console.log(err));
