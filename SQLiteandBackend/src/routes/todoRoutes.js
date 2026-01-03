import express from "express";
import db from "../db.js";

const router = express.Router();

// GET all todos for logged in user
router.get("/", (req, res) => {});

// CREATE A NEW todo
router.post("/", (req, res) => {});

// update a todo
router.put("/:id", (req, res) => {});

// delete a todo
router.delete("/:id", (req, res) => {});

export default router;
