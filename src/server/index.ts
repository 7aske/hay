import express from "express";
import ejs from "ejs";
import index from "./controllers";

const app = express();

const {PORT = 3000} = process.env;

app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);

app.use("/static", express.static("static"));
app.use("/", index);

app.listen(PORT, () => {
	console.log("server started at http://localhost:" + PORT);
	console.log("server-side rendering using", ejs.name);
});
