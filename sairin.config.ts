// theme
import { SairinConfig } from "@sairinjs/core";
import BlogTheme from "@sairinjs/sairin-theme-minimal";

export default {
  siteConfig: {
    title: '上升气流',
    url: 'https://corwin.vercel.app'
  },
  theme: BlogTheme,
  themeConfig: {
    title: `上升气流`,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/corwin1949",
      },
//       {
//         title: "Twitter",
//         url: "https://twitter.com/randyloop",
//       },
    ],
  },
} as SairinConfig;
