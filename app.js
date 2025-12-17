import express from "express";

import productoRoutes from "./routes/productoRoutes.js";
import authRoutes from "./routes/auth.routes.js";
import albumsRoutes from "./routes/albums.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/productos", productoRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1", albumsRoutes);

// 404 FINAL
app.use((req, res) => {
  res.status(404).json({
    statusCode: 404,
    error: "Ruta no encontrada"
  });
});

export default app;
