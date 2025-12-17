import app from "./app.js";
import { config } from "./config/config.js";
import MongooseConnection from "./database/mongo.cnx.js";

const db = new MongooseConnection();
db.connect();

app.listen(config.SERVER_PORT, () => {
  console.log(
    `Servidor corriendo en http://${config.SERVER_HOST}:${config.SERVER_PORT}`
  );
});
