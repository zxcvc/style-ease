(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@styleease/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@styleease/core'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.style_ease_vite_plugin = {}, global.core));
})(this, (function (exports, core) { 'use strict';

	function style_ease_vite_plugin() {
	    return {
	        name: "style_ease_vite_plugin",
	        transformIndexHtml: core.transformHtml,
	    };
	}

	exports.style_ease_vite_plugin = style_ease_vite_plugin;

}));
