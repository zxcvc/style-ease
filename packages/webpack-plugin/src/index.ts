import { transformHtml } from "@styleease/core";
import { Compiler, sources } from "webpack";
class StyleEaseWebapckPlugin {
    apply(compiler: Compiler) {
        const plugin_name = "style_ease_webapck_plugin";
        compiler.hooks.emit.tapPromise(plugin_name, async (compilation) => {
            const assets = compilation.assets;
            const filenames = Object.keys(assets);
            const length = filenames.length;
            for (let i = 0; i < length; ++i) {
                const filename = filenames[i];
                if (/\.html$/.test(filename)) {
                    const html = assets[filename].source() as string;
                    const new_srouce = new sources.RawSource(
                        await transformHtml(html)
                    );
                    compilation.updateAsset(filename, new_srouce);
                }
            }
        });
    }
}
export default StyleEaseWebapckPlugin;
