import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => {
  res.send("Home");
  //router의 첫 페이지 만들기
};

globalRouter.get("/", handleHome);
//함수 사용

export default globalRouter;
