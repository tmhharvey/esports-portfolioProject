const express = require("express");

const app = express();

app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log("app is listening for request on port 3000");
});
