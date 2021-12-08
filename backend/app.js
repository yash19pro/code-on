const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

// import routes
const vault = require("./routes/vaultRoute");
const user = require("./routes/userRoutes");
app.use("/api/v1", vault);
app.use("/api/v1", user);

// Middleware
app.use(errorMiddleware);

module.exports = app;
