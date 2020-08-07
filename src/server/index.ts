import bodyParser from "body-parser";
import ejs from "ejs";
import express from "express";
import session from "express-session";
import { Sequelize } from "sequelize-typescript";
import index from "./controllers";
import login from "./controllers/login";
import authorization from "./middleware/authorization";

const app = express();

const {PORT = 3000} = process.env;


const sequelize = new Sequelize({
	database: "hay_database",
	dialect: "mariadb",
	username: "hay_root",
	password: "hay_root",
	models: [__dirname + "/models"],
});


app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
	store: undefined,
	name: "HAY.SESSID",
	secret: process.env.SESSION_SECRET || "changeme",
	resave: false,
	saveUninitialized: true,
	cookie: {secure: false, maxAge: 48 * 60 * 60},
}));
app.use("/static", express.static("static"));
app.use(authorization());
app.use("/", index);
app.use("/login", login);

app.listen(PORT, () => {
	console.log("server started at http://localhost:" + PORT);
	console.log("server-side rendering using", ejs.name);
});
