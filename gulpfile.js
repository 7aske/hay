const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const gnodemon = require("gulp-nodemon");
const plumber = require("gulp-plumber");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const ts = require("gulp-typescript");
const pjson = ts("./tsconfig.json");
const fs = require("fs");

const assetsFolders = ["src/client/assets/images/**/*", "src/client/assets/fonts/**/*"];
const scriptsFolder = "src/client/assets/scripts/**/*.ts";
const stylesFolder = "src/client/assets/styles/**/*.sass";
const viewsFolder = "src/server/views/**/*.ejs";
const serverFolder = "src/server/**/*.ts";

// UTIL
function compileForBackEnd(folder, dest) {
	return gulp.src([folder])
		.pipe(sourcemaps.init())
		.pipe(pjson)
		.js
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(dest));
}

function views() {
	return gulp.src([viewsFolder]).pipe(gulp.dest("build/views"));
}

function assets() {
	return gulp.src(assetsFolders).pipe(gulp.dest("build/static"));
}

function scripts() {
	return gulp.src([scriptsFolder])
		.pipe(ts({
			target: "es5",
			module: "commonjs",
			strict: true,
		}))
		.js
		.pipe(gulp.dest("build/static/scripts"));
}

function styles() {
	return gulp
		.src(stylesFolder)
		.pipe(plumber())
		.pipe(sass({outputStyle: "compressed"}))
		.pipe(postcss([cssnano()]))
		.pipe()
		.pipe(gulp.dest("build/static/styles"));
}


function server() {
	return compileForBackEnd(serverFolder, "build");
}

function watch() {
	gulp.watch(serverFolder, server);
	gulp.watch(scriptsFolder, scripts);
	gulp.watch(stylesFolder, styles);
	gulp.watch([...assetsFolders], assets);
	gulp.watch(viewsFolder, views);
}

function nodemon() {
	if (!fs.existsSync("build")) {
		fs.mkdirSync("build");
	}
	return Promise.resolve(gnodemon({
		script: "index.js",
		cwd: "build",
		ignore: ["build/static/*"],
	}));
}


exports.watch = gulp.series(gulp.parallel(server, scripts, styles, assets, views), watch)

exports.default = gulp.parallel(server, scripts, styles, assets, views);

