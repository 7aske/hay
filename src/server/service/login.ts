import crypto from "crypto";
import { Role } from "../models/Role";
import { User } from "../models/User";

export const login = async (username: string, password: string) => {
	const user = await User.findOne({where: {user_username: username}});
	const hash = crypto.createHash("sha512");

	hash.update(password);
	const hashedPassword = hash.digest("hex");

	if (user !== null && user.user_password === hashedPassword) {
		return user;
	} else {
		return null;
	}
};
