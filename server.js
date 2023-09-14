const mongoose = require("mongoose");
const app = require("./app");

const PORT = 8080;

mongoose
  .connect(
    "mongodb+srv://aadish:lUP2RfMufQPyLgtX@cluster0.77ot1dz.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp/book-management-service"
  )
  .then((client) => {
    app.listen(PORT, () => console.log("server running"));
  })
  .catch((err) => console.log(err));
