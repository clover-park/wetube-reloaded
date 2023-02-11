import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res) => {
  res.send("Edit User");
  //router의 첫 페이지 만들기
};

userRouter.get("/edit", handleEditUser);
//함수 사용

export default userRouter;
