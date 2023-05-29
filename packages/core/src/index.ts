import cheerio from "cheerio";
import { to_css } from "./to_css";

async function transformHtml(html: string): Promise<string> {
	const $ = cheerio.load(html);
	const langs = Object.keys(to_css) as Array<keyof typeof to_css>;
	const length = langs.length;
	for (let i = 0; i < length; ++i) {
		const lang = langs[i];
		const styles = $(`style[lang=${lang}]`);
		for (let i = 0; i < styles.length; ++i) {
			const style = styles[i];
			const child = style.children[0] as unknown as Text;
			const css = await to_css[lang](child.nodeValue || "");
			child.nodeValue = css;
			$(style).removeAttr("lang");
		}
	}
	return $.html();
}

export { transformHtml };
