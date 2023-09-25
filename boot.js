import express from "express";
const app = express();

import bodyParser from "body-parser";

import svcRoute from "./routes/svc.routes.js";
const PORT = process.env.PORT || 6000;

app.use(bodyParser.json());

svcRoute(app);

app.listen(PORT, () => {
  console.log(`sy-tracking is listening on port ${PORT}`);
});
