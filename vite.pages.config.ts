import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {fileURLToPath} from "node:url";
export default defineConfig({root:"pages",base:"/rewrite-studio/",plugins:[react()],resolve:{alias:{"@":fileURLToPath(new URL(".",import.meta.url))}},publicDir:"../public",build:{outDir:"../docs",emptyOutDir:true}});
