import express from "express";
import {
  handleStory,
  id,
  edit,
  deleteStory,
} from "../controllers/storyController";

const storyRouter = express.Router();
storyRouter.get("/stories", handleStory);
storyRouter.get("/:id", id);
storyRouter.get("/:id/edit", edit);
storyRouter.get("/:id/delete", deleteStory);

export default storyRouter;
