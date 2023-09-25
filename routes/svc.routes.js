import {
  trackAlert,
  upsertTracking,
} from "../controllers/tracking.controller.js";

export default function (app) {
  app.post("/api/trackAlert", trackAlert);
  app.post("/api/upsertTracking", upsertTracking);
}
