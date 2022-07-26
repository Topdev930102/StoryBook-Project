const express = require("express");
const serverStatic = require("serve-static");
const path = require("path");
const app = express();
app.use(serverStatic(path.join(__dirname, "frontend")));
const port = process.env.PORT || 6006;
app.listen(port);
