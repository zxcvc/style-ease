'use strict';

var core = require('@styleease/core');
var webpack = require('webpack');

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
