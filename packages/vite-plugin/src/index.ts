import type { Plugin } from "vite";
import { transformHtml } from "@styleease/core";

function style_ease_vite_plugin(): Plugin {
	return {
		name: "style_ease_vite_plugin",
		transformIndexHtml: transformHtml,
	};
}
export { style_ease_vite_plugin };
