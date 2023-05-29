(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@styleease/core'), require('webpack')) :
	typeof define === 'function' && define.amd ? define(['exports', '@styleease/core', 'webpack'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.StyleEaseWebapckPlugin = {}, global.core, global.webpack));
})(this, (function (exports, core, webpack) { 'use strict';

	class StyleEaseWebapckPlugin {
	    apply(compiler) {
	        const plugin_name = "style_ease_webapck_plugin";
	        compiler.hooks.emit.tapPromise(plugin_name, async (compilation) => {
	            const assets = compilation.assets;
	            const filenames = Object.keys(assets);
	            const length = filenames.length;
	            for (let i = 0; i < length; ++i) {
	                const filename = filenames[i];
	                if (/\.html$/.test(filename)) {
	                    const html = assets[filename].source();
	                    const new_srouce = new webpack.sources.RawSource(await core.transformHtml(html));
	                    compilation.updateAsset(filename, new_srouce);
	                }
	            }
	        });
	    }
	}

	exports.StyleEaseWebapckPlugin = StyleEaseWebapckPlugin;

}));
