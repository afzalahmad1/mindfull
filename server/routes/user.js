import express from "express"
const router = express();

import {addUser,deleteUser,getAllUsers, updateUser}  from "../controllers/user.js"
// const { isAuth } = require("../middlewares/AuthMiddleware");

router.post("/addUser", addUser);
router.get("/getAllUsers", getAllUsers);
router.delete("/delete/:id", deleteUser);
router.put("/update", updateUser);

export default router;