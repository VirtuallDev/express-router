const express = require("express");
const app = express();
const userRoute = require("./routes/users.js");

app.use(express.json());

app.use("/users", userRoute);

app.listen(process.env.PORT || 5000);