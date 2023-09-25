import {
  trackUserAlert,
  upsertUserTracking,
} from "../services/tracking.service.js";
import model from "../models/response.model.js";

const trackAlert = async (req, res) => {
  trackUserAlert(req.body, (isSuccess, data) => {
    isSuccess
      ? res.status(200).send({ ...model.successModel, message: data })
      : res.status(401).send({ ...model.failModel, message: data });
  });
};

const upsertTracking = async (req, res) => {
  upsertUserTracking(req.body, (isSuccess, data) => {
    isSuccess
      ? res.status(200).send({ ...model.successModel, message: data })
      : res.status(401).send({ ...model.failModel, message: data });
  });
};
export { trackAlert, upsertTracking };
