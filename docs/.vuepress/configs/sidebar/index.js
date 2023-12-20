/**
 * 左侧菜单栏配置
 */
export const sidebar = {
  "/速查笔记/": [
    {
      text: "docker",
      children: [
        "/速查笔记/docker速查/README.md",
        "/速查笔记/docker速查/docker命令.md",
        "/速查笔记/docker速查/Dockerfile.md",
      ],
    },
    {
      text: "docker-compose",
      children: [
        "/速查笔记/docker-compose速查/README.md",
        "/速查笔记/docker-compose速查/docker-compose命令.md",
        "/速查笔记/docker-compose速查/docker-compose模板.md",
      ],
    },
    {
      text: "jave",
      children: ["/速查笔记/java速查/README.md"],
    },
    {
      text: "linux",
      children: ["/速查笔记/linux速查/README.md"],
    },
    {
      text: "nginx",
      children: ["/速查笔记/nginx速查/README.md"],
    },
    {
      text: "psql",
      children: ["/速查笔记/psql速查/README.md"],
    },
    {
      text: "vim",
      children: ["/速查笔记/vim速查/README.md"],
    },
    {
      text: "云服务",
      children: ["/速查笔记/云服务速查/README.md"],
    },
  ],
};
