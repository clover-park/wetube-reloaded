import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";
//home 화면에서는 join, trending router로 갈 수 있음.

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
//함수 사용

export default globalRouter;
