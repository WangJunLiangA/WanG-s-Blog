export default {

  //导航栏标题配置
  webTitle: {
    //导航栏显示标题
    name: "WanG",
    allName: "汪阿汪的博客",
    allNameEn: "WanG's Blog",
    asideName: "home",
    //路由地址
    router: "/home",
    //按钮图标
    icon: "iconshouye",
  },

  //导航栏选项配置
  navList: [{
      //导航栏显示的标题
      name: "technology",
      //路由地址
      router: "/technology",
      //按钮图标
      icon: "iconkexuejishu-",
    },
    {
      name: "project",
      router: "/project",
      icon: "iconkaiyuanzujian",
    },
    {
      icon: "icondushu-",
      name: "book",
      router: "/book",
    },
    {
      icon: "iconw_fengjing",
      name: "journey",
      router: "/journey",
    },
    {
      icon: "iconcomiisfariji",
      name: "diary",
      router: "/diary",
    }
  ],

  //脚步链接列表
  footList: [{
      name: "goodSite", //国际化文件的Key
      router: "/goodSite", //路由地址
    },
    {
      name: "tellMe",
      router: "/tellMe",
    },
    {
      name: "aboutMe",
      router: "/aboutMe",
    },
  ],

  //脚部标题
  footTitle: "@2021 Site By JunLiangWang",

  //语言前缀配置
  langPre: {
    navigation: "navigation.",
    foot: "foot.",
    goodSite: "goodSite."
  },

  //语言列表配置
  languageList: {
    //语言Key,与i8n中的key对应
    zh: {
      itemTitle: "简体中文", //列表选项中显示的标题
      displayTitle: "简" //选中后按钮显示的值
    },
    en: {
      itemTitle: "English",
      displayTitle: "EN"
    }
  },

  //社交媒体账号
  SocialLinkList: [{
      icon: "icongithub",
      href: "https://github.com/JunLiangWang-X",
    },
    {
      icon: "icontuitetwitter43",
      href: "https://twitter.com/dgvDTmueK8pFwAY",
    },
    {
      icon: "icongitee",
      href: "https://gitee.com/coder_wan",
    },
    {
      icon: "iconbilibilix",
      href: "https://space.bilibili.com/339798658",
    },
  ],

  //页面配置
  home: {
    title: "home.title",
    subTitle: "home.subtitle",
  },

  goodSiteLinkList: [{
    class: "IconMmaterial",
    siteList: [{
      icon: "https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg",
      detail: "阿里巴巴矢量图标与插画库",
      name: "iconfont",
      href: "https://www.iconfont.cn/"
    },{
      icon: "https://zhwangart.com/images/logos/featherLogo.svg",
      detail: "feather矢量图标库",
      name: "feathericons",
      href: "https://feathericons.com/"
    },{
      icon: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
      detail: "字节跳动矢量图标库",
      name: "iconpark",
      href: "https://iconpark.oceanengine.com/home"
    },{
      icon: "https://maxst.icons8.com/vue-static/icon/favicon/icons8_fav_32×32.png",
      detail: "icons8矢量图标库",
      name: "icons8",
      href: "https://icons8.cn/icons"
    },{
      icon: "https://media.flaticon.com/dist/min/img/apple-icon-152x152-precomposed.png",
      detail: "flaticon矢量图标库",
      name: "flaticon",
      href: "https://www.flaticon.com/uicons"
    },{
      icon: "https://www.iconfinder.com/static/img/favicons/android-chrome-192x192.png?beec5a6406",
      detail: "iconfinder矢量图标库",
      name: "iconfinder",
      href: "https://www.iconfinder.com/"
    },
    ]
  },{
    class: "ImgMmaterial",
    siteList: [{
      icon: "https://www.pexels.com/assets/icons/apple-touch-icon-06fc98261c772fe20d584aba2336ad2bb32dffced6ec5470b03228548042f162.png",
      detail: "才华横溢创作者分享的图片",
      name: "pexels",
      href: "https://www.pexels.com/"
    },{
      icon: "https://unsplash.com/apple-touch-icon.png",
      detail: "精美免费图片",
      name: "unsplash",
      href: "https://unsplash.com/"
    },{
      icon: "https://www.hippopx.com/public/css/favicon.ico",
      detail: "基于CC0协议的免版权图库",
      name: "hippopx",
      href: "https://www.hippopx.com/"
    },{
      icon: "https://colorhub.me/colorhub.png",
      detail: "免费高清无版权的图片资源库",
      name: "colorhub",
      href: "https://colorhub.me/"
    },{
      icon: "https://visualhunt.com/favicon.ico",
      detail: "根据指定颜色寻找图片",
      name: "visualhunt",
      href: "https://visualhunt.com/"
    },{
      icon: "https://picjumbo.com/safari-pinned-tab.svg",
      detail: "各种免费照片的站点",
      name: "picjumbo",
      href: "https://picjumbo.com/"
    },
    ]
  },{
    class: "IllustrationMmaterial",
    siteList: [{
      icon: "https://www.pexels.com/assets/icons/apple-touch-icon-06fc98261c772fe20d584aba2336ad2bb32dffced6ec5470b03228548042f162.png",
      detail: "才华横溢创作者分享的图片",
      name: "pexels",
      href: "https://www.pexels.com/"
    },{
      icon: "https://unsplash.com/apple-touch-icon.png",
      detail: "精美免费图片",
      name: "unsplash",
      href: "https://unsplash.com/"
    },{
      icon: "https://www.hippopx.com/public/css/favicon.ico",
      detail: "基于CC0协议的免版权图库",
      name: "hippopx",
      href: "https://www.hippopx.com/"
    },{
      icon: "https://colorhub.me/colorhub.png",
      detail: "免费高清无版权的图片资源库",
      name: "colorhub",
      href: "https://colorhub.me/"
    },{
      icon: "https://visualhunt.com/favicon.ico",
      detail: "根据指定颜色寻找图片",
      name: "visualhunt",
      href: "https://visualhunt.com/"
    },{
      icon: "https://picjumbo.com/safari-pinned-tab.svg",
      detail: "各种免费照片的站点",
      name: "picjumbo",
      href: "https://picjumbo.com/"
    },
    ]
  }]
}