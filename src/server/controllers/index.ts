import { Router } from "express";

const index = Router();

index.get("/", (req, res) => res.render("index", {message:"Hello!"}));

export default index;
