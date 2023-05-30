## 一个 css 工具，支持在 html 文件的 style 标签中使用 css 预处理器语法

-   支持 scss和less语法
-   支持 vite 插件和 webpack 插件

### usage :

#### install

```bash
pnpm add -D @sytleease
```

#### vite-plugin

```javascript
import { defineConfig } from "vite";
import { style_ease_vite_plugin } from "@styleease/vite-plugin";
export default defineConfig({
	plugins: [style_ease_vite_plugin()],
});
```

#### webpack-plugin

```javascript
const path = require("node:path");
const { StyleEaseWebapckPlugin } = require("@styleease/webpack-plugin");
/**
 * @type {import('webpack').Configuration}
 */
const config = {
	plugins: [new StyleEaseWebapckPlugin()],
};

module.exports = config;
```

### 然后就可以在 html 文件中对 style 标签中使用预处理器语法了

```html
<!DOCTYPE html>
<html lang="zh">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style lang="scss">
			body {
				.box {
					width: 100px;
          height: 100px;
				}
			}
		</style>
		<style lang="less">
			body {
				.box {
					background-color: blueviolet;
				}
			}
		</style>
	</head>
	<body>
		<div class="box"></div>
	</body>
</html>
```
