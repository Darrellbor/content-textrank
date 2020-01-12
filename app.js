const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const summarize_routes = require("./api/routes/summarize");

app.set("port", 3501);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//middleware for routes
app.use("/summarize/v1", summarize_routes);

//custom error handler for all routes
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.code || 500;
  const message = error.message;
  const data = error.data || [];
  res.status(status).json({ message: message, data: data });
});

const server = app.listen(app.get("port"), () => {
  const port = server.address().port;
  console.log("App listening on port " + port);
});
