import express from "express";
import { getAll, getByID, remove, update } from "../controllers/user";
const router = express.Router();

router.get("/users", getAll);
router.delete("/users/:id", remove);
router.get("/users/:id", getByID);
router.put("/users/:id", update);

export default router;