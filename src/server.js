import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
//뷰 엔젠을 pug로 설정
app.use(logger);

//router 3개 생성
app.use("/", globalRouter);
app.use("/videos", videoRouter);
//누군가 /videos로 시작하는 url을 찾는다면
//express가 videoRouter로 감.
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
