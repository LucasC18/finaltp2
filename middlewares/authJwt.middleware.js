import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const authJwtMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        statusCode: 401,
        error: "Authorization header missing"
      });
    }

    const [type, token] = authHeader.split(" ");

    if (type !== "Bearer" || !token) {
      return res.status(401).json({
        statusCode: 401,
        error: "Invalid authorization format"
      });
    }

    const payload = jwt.verify(token, config.JWT_SECRET);

    req.user = payload;

    next();
  } catch (error) {
    return res.status(401).json({
      statusCode: 401,
      error: "Invalid or expired token"
    });
  }
};
