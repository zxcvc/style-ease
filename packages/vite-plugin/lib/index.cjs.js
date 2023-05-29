'use strict';

var core = require('@styleease/core');

function style_ease_vite_plugin() {
    return {
        name: "style_ease_vite_plugin",
        transformIndexHtml: core.transformHtml,
    };
}

exports.style_ease_vite_plugin = style_ease_vite_plugin;
