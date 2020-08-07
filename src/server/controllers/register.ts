import { Router } from "express";

const register = Router();

register.get("/", (req, res) => {
	res.render("register");
});

register.post("/", (req, res) => {
	res.json(req.body);
});

export default register;
