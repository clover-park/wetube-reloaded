import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => {
  res.send("Watch Video");
  //router의 첫 페이지 만들기
};

videoRouter.get("/watch", handleWatchVideo);
//함수 사용
//router 한개만 존재

export default videoRouter;
