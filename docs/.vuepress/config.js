module.exports = {
  title: "工作简历",
  base: "/resume/",
  themeConfig: {
    search: false,
    navbar: false,
  },
  plugins: ["@vuepress/back-to-top", "@snowdog/vuepress-plugin-pdf-export"],
  head: [["link", { rel: "shortcut icon", type: "image/x-icon", href: "favicon.png" }]],
};
