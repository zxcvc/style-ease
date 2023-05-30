const { execSync } = require("node:child_process");
const { resolve } = require("path");
const fs = require("fs");

const root_dir = resolve(__dirname, "./");
const release_dir = resolve(root_dir, "@styleease");
const root_packagejson_path = resolve(root_dir, "package.json");
const root_package = require(root_packagejson_path);
const release_packagejson_path = resolve(release_dir, "package.json");
const packages = ["core", "vite-plugin", "webpack-plugin"];

execSync(`rm -rf ${release_dir}`);
execSync(`mkdir ${release_dir}`);

execSync("pnpm build");

// mkdir;
packages.forEach((item) => {
	const pkg_dir = resolve(release_dir, item);
	execSync(`mkdir ${pkg_dir}`);
	const pkg_lib_dir = resolve(pkg_dir, "lib");
	execSync(`mkdir ${pkg_lib_dir}`);
});

packages.forEach((item) => {
	const pkg_dir = resolve(root_dir, "packages", item);
	const target_dir = resolve(release_dir, item);
	const origin = ["lib/*", "package.json"];
	const target = ["lib", "package.json"];
	for (let i = 0; i < origin.length; ++i) {
		let o = origin[i];
		let t = target[i];
		o = resolve(pkg_dir, o);
		t = resolve(target_dir, t);
		execSync(`cp ${o} ${t}`);
	}
});

const package_delete_filed = ["devDependencies", "files", "workspaces", "scripts", "main"];

package_delete_filed.forEach((item) => {
	delete root_package[item];
});
fs.writeFileSync(release_packagejson_path, JSON.stringify(root_package, null, 4));
