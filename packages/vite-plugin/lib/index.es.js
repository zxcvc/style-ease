import { transformHtml } from '@styleease/core';

function style_ease_vite_plugin() {
    return {
        name: "style_ease_vite_plugin",
        transformIndexHtml: transformHtml,
    };
}

export { style_ease_vite_plugin };
