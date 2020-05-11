import { Router } from "express";
import { Post } from "../models/Post";

const index = Router();

index.get("/", (req, res) => res.render("index", {message:"Hello!"}));
index.get("/test", (req, res) => {
	const post = new Post({
		post_title: "Test",
		post_excerpt: "Test",
		post_body: "Test",
		post_date_posted: new Date(),
		post_deleted: false,
		post_published: false,
	});

	post.save();
});

export default index;
