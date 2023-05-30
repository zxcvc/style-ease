"use strict";
var e = require("cheerio"),
    s = require("sass"),
    t = require("less");
async function r(e) {
    return s.compileString(e).css;
}
const n = {
    sass: r,
    scss: r,
    less: async function (e) {
        return (await t.render(e)).css;
    },
};
exports.transformHtml = async function (s) {
    const t = e.load(s),
        r = Object.keys(n),
        c = r.length;
    for (let e = 0; e < c; ++e) {
        const s = r[e],
            c = t(`style[lang=${s}]`);
        for (let e = 0; e < c.length; ++e) {
            const r = c[e],
                o = r.firstChild,
                a = await n[s](o.nodeValue || "");
            (o.nodeValue = a), t(r).removeAttr("lang");
        }
    }
    return t.html();
};
