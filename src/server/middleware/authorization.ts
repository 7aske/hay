import { NextFunction } from "express";


export default function authorization() {
	return (req: Express.Request, res: Express.Response, next: NextFunction) => {
		console.log(req.session?.id);
		next();
	};
}
