const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`error: ${err.message}`);
  console.log("Shutting down due to unhandled promise rejection");
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

// Unhandled promise rejection [db uri jab wrong hota hai tab]
process.on("unhandledRejection", (err) => {
  console.log(`error: ${err.message}`);
  console.log("Shutting down due to unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
