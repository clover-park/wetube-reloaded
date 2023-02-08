import express from "express";
//express 패키지를 express라는 이름으로 import해옴.
//const express = require("express");
//이거 보다 import문이 더 보기 좋음. babel덕에!

const PORT = 4000;

const app = express();
//express application 생성
//express 설계를 위한 규칙임.

//application 설정
//application에게 get request에 응답하는 방법 등등 가르침.
const handleHome = (req, res) => {
  return res.send("hi");
};

app.get("/", handleHome);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);
//app이 request를 listen할 수 있게 해야함.
app.listen(PORT, handleListening);
