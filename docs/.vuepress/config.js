import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "速查笔记",
  description: "速查笔记",
  dest: "dist",
  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules"],
  port: 8080,
  plugins: [],
});
