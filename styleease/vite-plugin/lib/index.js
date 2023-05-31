!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? t(exports, require("@styleease/core"))
        : "function" == typeof define && define.amd
        ? define(["exports", "@styleease/core"], t)
        : t(
              ((e =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : e || self).style_ease_vite_plugin = {}),
              e.core
          );
})(this, function (e, t) {
    "use strict";
    e.style_ease_vite_plugin = function () {
        return {
            name: "style_ease_vite_plugin",
            transformIndexHtml: t.transformHtml,
        };
    };
});
