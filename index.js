const express = require("express");

const router = require("./routes/router");

const app = express();

app.use(express.json());
app.use("/api/v1", router);

app.listen(8080);
