import { transformHtml as e } from "@styleease/core";
import { sources as s } from "webpack";
class t {
    apply(t) {
        t.hooks.emit.tapPromise("style_ease_webapck_plugin", async (t) => {
            const o = t.assets,
                a = Object.keys(o),
                c = a.length;
            for (let p = 0; p < c; ++p) {
                const c = a[p];
                if (/\.html$/.test(c)) {
                    const a = o[c].source(),
                        p = new s.RawSource(await e(a));
                    t.updateAsset(c, p);
                }
            }
        });
    }
}
export { t as StyleEaseWebapckPlugin };
