import { pool } from "../config/database.config.js";
import utils from "../utils/utils.js";
import createSocketConnection from "../config/socket.config.js";

const trackUserAlert = async (data, callback) => {
  try {
    const query = `SELECT id, payload, alert_id, lat, lng, createdAt FROM tracking WHERE alert_id= ? ORDER BY createdAt DESC`;
    const [rows] = await pool.query(query, [data.alert_id]);
    return rows.length > 0
      ? callback(true, rows[0])
      : callback(false, "Valid code not found");
  } catch (error) {
    console.error("Error in getCode", error);
    callback(false, error);
  }
};
const upsertUserTracking = async (data, callback) => {
  try {
    const socket = createSocketConnection("http://localhost:4000");
    const query = `INSERT INTO tracking(payload, alert_id, lat, lng) VALUES (?,?,?,?)`;
    const [rows] = await pool.query(query, [
      utils.uuid(),
      data.alert_id,
      data.lat,
      data.lng,
    ]);
    rows.affectedRows == 1
      ? (callback(true, rows[0]),
        socket.emit("tracking_start", {
          alert_id: "7ff32a7e-bba6-4a67-a3a4-ea0e6f009592",
        }))
      : callback(false, "failed on inserting");
  } catch (error) {
    console.error("Error in getCode", error);
    callback(false, error);
  }
};
export { trackUserAlert, upsertUserTracking };
