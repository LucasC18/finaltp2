import express from "express";
import { ProductoController } from "../controllers/productoController.js";
import { authJwtMiddleware } from "../middlewares/authJwt.middleware.js";

const router = express.Router();
const controller = new ProductoController();

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);

router.put("/:id", authJwtMiddleware, controller.update);
router.delete("/:id", authJwtMiddleware, controller.delete);

router.patch(
  "/:id/stock",
  authJwtMiddleware,
  controller.incrementStock
);

export default router;
