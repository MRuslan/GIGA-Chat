import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		dedupe: ["svelte"],
		alias: {
			"@Components": path.resolve(__dirname, "./src/Components"),
			"@Middleware": path.resolve(__dirname, "./src/Middleware"),
			"@Interface": path.resolve(__dirname, "./src/Interface"),
			"@Data": path.resolve(__dirname, "./src/Data"),
			"@Page": path.resolve(__dirname, "./src/Page"),
		},
	},
	optimizeDeps: {
		include: ["nprogress", "is-empty", "webfontloader", "sdp"],
	},
	plugins: [svelte({
		compilerOptions: {
			dev: true,
		},
		preprocess: sveltePreprocess({
			scss: {
				prependData: "@use 'src/Styles/mixins.scss' as *;",
				includePaths: ["src"],
			},
			postcss: {
				plugins: [autoprefixer],
			},
		}),
	})],
});
