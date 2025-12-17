import express from "express";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

const router = express.Router();

router.post("/login", (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({
      statusCode: 400,
      error: "Username required"
    });
  }

  const token = jwt.sign(
    { username },
    config.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({ token });
});

export default router;
