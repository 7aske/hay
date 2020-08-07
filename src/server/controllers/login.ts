import { Router } from "express";
import { Role } from "../models/Role";
import * as loginService from "../service/login";

const login = Router();

login.get("/", (req, res) => {
	res.render("login", {title: "Login"});
});

login.post("/", async (req, res) => {
	const user = await loginService.login(req.body["username"], req.body["password"]);
	if (user) {
		req.session!["user"] = user;
		res.render("admin/index", {title: "Admin", roles: user.roles || []});
	} else {
		res.render("login", {title: "Login"});
	}
});


export default login;
