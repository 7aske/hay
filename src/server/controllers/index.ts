import { Router } from "express";
import { Category } from "../models/Category";
import { Post } from "../models/Post";

const index = Router();

index.get("/", (req, res) => {
	res.render("index", {message: "Hello!"});
});

index.get("/test", async (req, res) => {
	const categ = await Category.findByPk(1);
	console.log(categ?.id, categ?.name);
	const post = new Post({
		post_title: "Test",
		post_excerpt: "Test",
		post_body: "Test",
		id_category: (await Category.findByPk(1))?.id,
		post_date_posted: new Date(),
		post_deleted: false,
		post_published: false,
	});

	post.save();
	res.json(post);
});

export default index;
