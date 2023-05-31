!(function (e, s) {
    "object" == typeof exports && "undefined" != typeof module
        ? s(exports, require("@styleease/core"), require("webpack"))
        : "function" == typeof define && define.amd
        ? define(["exports", "@styleease/core", "webpack"], s)
        : s(
              ((e =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : e || self).StyleEaseWebapckPlugin = {}),
              e.core,
              e.webpack
          );
})(this, function (e, s, t) {
    "use strict";
    e.StyleEaseWebapckPlugin = class {
        apply(e) {
            e.hooks.emit.tapPromise("style_ease_webapck_plugin", async (e) => {
                const o = e.assets,
                    a = Object.keys(o),
                    c = a.length;
                for (let n = 0; n < c; ++n) {
                    const c = a[n];
                    if (/\.html$/.test(c)) {
                        const a = o[c].source(),
                            n = new t.sources.RawSource(
                                await s.transformHtml(a)
                            );
                        e.updateAsset(c, n);
                    }
                }
            });
        }
    };
});
