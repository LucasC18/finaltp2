import express from "express";
import { AlbumsController } from "../controllers/albumsController.js";

const router = express.Router();
const controller = new AlbumsController();

router.get("/albums/csv", controller.getCsv);

export default router;
