declare function sass_to_css(content: string): Promise<string>;
declare function less_to_css(ccontent: string): Promise<string>;
declare const to_css: {
    sass: typeof sass_to_css;
    scss: typeof sass_to_css;
    less: typeof less_to_css;
};
export { to_css };
