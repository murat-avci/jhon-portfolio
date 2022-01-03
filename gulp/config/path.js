// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const build = `./build`; // Также можно использовать rootFolder
const source = `./source`;

export const path = {
	build: {
		js: `${build}/js/`,
		css: `${build}/css/`,
		html: `${build}/`,
		images: `${build}/img/`,
		fonts: `${build}/fonts/`,
		files: `${build}/files/`
	},
	src: {
		js: `${source}/js/app.js`,
		images: `${source}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${source}/img/**/*.svg`,
		scss: `${source}/scss/style.scss`,
		html: `${source}/*.html`, //.pug
		files: `${source}/files/**/*.*`,
		svgicons: `${source}/svgicons/*.svg`,
	},
	watch: {
		js: `${source}/js/**/*.js`,
		scss: `${source}/scss/**/*.scss`,
		html: `${source}/**/*.html`, //.pug
		images: `${source}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		files: `${source}/files/**/*.*`
	},
	clean: build,
	build: build,
	source: source,
	rootFolder: rootFolder,
	ftp: ``
}