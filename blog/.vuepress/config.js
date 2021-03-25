const path = require("path");

module.exports = {
  title: "Renovamen (Xiaohan Zou)",
  description: "Renovamen's blog, powered by VuePress, themed by Gungnir.",
  head: [
    ["link", { rel: "icon", href: "/img/logo.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  theme: "gungnir",
  themeConfig: {
    repo: "Renovamen/renovamen.github.io",
    docsDir: "blog",
    editLinks: true,
    lastUpdated: true,
    hitokoto: true, // Enable hitokoto (一言) or not?
    codeTheme: "gungnir-dark",
    rss: {
      site_url: "https://renovamen.ink",
      copyright: "Renovamen 2018-2021",
      count: 20
    },
    comment: {
      owner: "This-is-an-Apple",
      repo: "gitalk-comments",
      clientId: "d6247712dc288a5a60ca",
      clientSecret: "ed1ec72417828343c79ed910a1b77d140fa715a7"
    },
    analytics: {
      ga: "UA-146858305-1",
      ba: "75381d210789d3eaf855fa16246860cc"
    },
    katex: true,
    mdPlus: {
      all: true
    },
    readingTime: {
      excludes: ["/about", "/tags/.*", "/links"]
    },
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "About",
        link: "/about/",
        icon: "fa-paw"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "Links",
        link: "/links/",
        icon: "fa-satellite-dish"
      }
    ],
    personalInfo: {
      name: "Renovamen",
      avatar: "/img/avatar.jpeg",
      description: "いつか、私がヒトじゃなくなっても",
      sns: {
        github: "Renovamen",
        linkedin: "xiaohan-zou-55bba0160",
        facebook: "renovamen.zou",
        twitter: "renovamen_zxh",
        zhihu: "chao-neng-gui-su",
        email: "renovamenzxh@gmail.com"
      }
    },
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/5.jpg"
      }
    ],
    pages: {
      tags: {
        title: "Tags",
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        title: "Links",
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },
    footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2021
      <br>
      Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },
  markdown: {
    // lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5"]
  },
  configureWebpack: () => {
    const NODE_ENV = process.env.NODE_ENV;
    if (NODE_ENV === "production") {
      return {
        output: {
          publicPath:
            "https://cdn.jsdelivr.net/gh/Renovamen/renovamen.github.io@gh-pages/"
        },
        resolve: {
          alias: {
            public: path.resolve(__dirname, "./public")
          }
        }
      };
    } else {
      return {
        resolve: {
          alias: {
            public: path.resolve(__dirname, "./public")
          }
        }
      };
    }
  }
};
