import s from "cheerio";
import { compileString as t } from "sass";
import { render as n } from "less";
async function e(s) {
    return t(s).css;
}
const o = {
    sass: e,
    scss: e,
    less: async function (s) {
        return (await n(s)).css;
    },
};
async function r(t) {
    const n = s.load(t),
        e = Object.keys(o),
        r = e.length;
    for (let s = 0; s < r; ++s) {
        const t = e[s],
            r = n(`style[lang=${t}]`);
        for (let s = 0; s < r.length; ++s) {
            const e = r[s],
                c = e.firstChild,
                a = await o[t](c.nodeValue || "");
            (c.nodeValue = a), n(e).removeAttr("lang");
        }
    }
    return n.html();
}
export { r as transformHtml };
