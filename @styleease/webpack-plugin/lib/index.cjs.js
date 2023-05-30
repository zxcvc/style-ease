"use strict";
var e = require("@styleease/core"),
    s = require("webpack");
exports.StyleEaseWebapckPlugin = class {
    apply(t) {
        t.hooks.emit.tapPromise("style_ease_webapck_plugin", async (t) => {
            const a = t.assets,
                r = Object.keys(a),
                c = r.length;
            for (let o = 0; o < c; ++o) {
                const c = r[o];
                if (/\.html$/.test(c)) {
                    const r = a[c].source(),
                        o = new s.sources.RawSource(await e.transformHtml(r));
                    t.updateAsset(c, o);
                }
            }
        });
    }
};
