'use strict';

var cheerio = require('cheerio');
var sass = require('sass');
var less = require('less');

async function sass_to_css(content) {
    return sass.compileString(content).css;
}
async function less_to_css(ccontent) {
    return (await less.render(ccontent)).css;
}
const to_css = {
    sass: sass_to_css,
    scss: sass_to_css,
    less: less_to_css,
};

async function transformHtml(html) {
    const $ = cheerio.load(html);
    const langs = Object.keys(to_css);
    const length = langs.length;
    for (let i = 0; i < length; ++i) {
        const lang = langs[i];
        const styles = $(`style[lang=${lang}]`);
        for (let i = 0; i < styles.length; ++i) {
            const style = styles[i];
            const child = style.children[0];
            const css = await to_css[lang](child.nodeValue || "");
            child.nodeValue = css;
            $(style).removeAttr("lang");
        }
    }
    return $.html();
}

exports.transformHtml = transformHtml;
