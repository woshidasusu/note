import { defineClientConfig } from "@vuepress/client";

export default defineClientConfig({
  enhance({ app }) {
    // 注册全局组件
    // app.component("MyComponent", MyComponent);
  },
});
