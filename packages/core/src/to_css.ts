import { compileString } from "sass";
import { render } from "less";
async function sass_to_css(content: string): Promise<string> {
	return compileString(content).css;
}

async function less_to_css(ccontent: string): Promise<string> {
	return (await render(ccontent)).css;
}
const to_css = {
	sass: sass_to_css,
	scss: sass_to_css,
	less: less_to_css,
};
export { to_css };
