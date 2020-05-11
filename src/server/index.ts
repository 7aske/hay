import express from "express";
import ejs from "ejs";
import index from "./controllers";
import {Sequelize} from 'sequelize-typescript';

const app = express();

const {PORT = 3000} = process.env;


const sequelize =  new Sequelize({
	database: 'hay_database',
	dialect: 'mariadb',
	username: 'hay_root',
	password: 'hay_root',
	models: [__dirname + '/models'],
});


app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

app.use("/static", express.static("static"));
app.use("/", index);

app.listen(PORT, () => {
	console.log("server started at http://localhost:" + PORT);
	console.log("server-side rendering using", ejs.name);
});
