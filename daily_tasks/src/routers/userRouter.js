import express from "express";
import { handleUser, userID, edit } from "../controllers/userController";

const userRouter = express.Router();
userRouter.get("/users", handleUser);
userRouter.get("/:id", userID);
userRouter.get("/edit-profile", edit);

export default userRouter;
