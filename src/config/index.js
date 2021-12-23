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
    class: "videoMmaterial",
    siteList: [{
      icon: "https://www.pexels.com/assets/icons/apple-touch-icon-06fc98261c772fe20d584aba2336ad2bb32dffced6ec5470b03228548042f162.png",
      detail: "免费视频",
      name: "pexels",
      href: "https://www.pexels.com/videos/"
    },{
      icon: "https://wedistill.io/assets/logo-color-ba61b0fd64d69d47f1bcb6d868cf1ca4.png",
      detail: "精选高清视频免费供您个人和商业使用",
      name: "wedistill",
      href: "https://wedistill.io/"
    },{
      icon: "https://mazwai.com/assets/images/svg/logo.svg",
      detail: "令人惊叹的免费素材片段",
      name: "mazwai",
      href: "https://mazwai.com/"
    },{
      icon: "https://www.videezy.com/favicon.png",
      detail: "免费4K视频素材",
      name: "videezy",
      href: "https://www.videezy.com/"
    }]
  },{
    class: "soundMmaterial",
    siteList: [{
      icon: "https://www.ear0.com/public/images/favicon.ico",
      detail: "声音地图",
      name: "耳聆",
      href: "https://www.ear0.com/sound"
    },{
      icon: "https://cdn-sqn.aigei.com/assets/site/img/icon/favicon.ico",
      detail: "专注免费素材",
      name: "爱给网",
      href: "https://www.aigei.com/"
    },{
      icon: "https://www.tosound.com/favicon.ico",
      detail: "探索全球声音资源",
      name: "淘声网",
      href: "https://www.tosound.com/"
    },{
      icon: "https://cdn.musicbed.com/image/upload/v1523550146/favicons/android-icon-192x192.png",
      detail: "为你寻找最好歌曲",
      name: "musicbed",
      href: "https://www.musicbed.com/"
    },{
      icon: "https://www.jamendo.com/Client/assets/toolkit/images/icon/android-chrome-192x192.1626433529657.png",
      detail: "音乐素材",
      name: "jamendo",
      href: "https://www.jamendo.com/"
    },{
      icon: "https://cdn.audiolibrary.com.co/themes/ytalc/assets/favicon/android-chrome-192x192.png",
      detail: "免费音乐平台",
      name: "audiolibrary",
      href: "https://www.audiolibrary.com.co/"
    }]
  },{
    class: "IllustrationMmaterial",
    siteList: [{
      icon: "https://www.manypixels.co/favicon.svg",
      detail: "免费插画画廊",
      name: "manypixels",
      href: "https://www.manypixels.co/gallery"
    },{
      icon: "https://assets.website-files.com/5bff8886c3964a992e90d465/5c00a0ce59aa851331d34687_favicon-256.png",
      detail: "具有设计库的人物混合搭配插图",
      name: "humaaans",
      href: "https://www.humaaans.com/"
    },{
      icon: "https://iradesign.io/assets/img/favicon.svg",
      detail: "发现 IRA 插图以增强您的项目",
      name: "IRA Design",
      href: "https://iradesign.io/gallery/illustrations"
    },{
      icon: "https://app.streamlinehq.com/_next/static/image/public/favicon.3e66caaaab52f38e5a5674b0aa669e1b.png",
      detail: "友好色彩丰富的插画库 ",
      name: "streamlinehq",
      href: "https://app.streamlinehq.com/illustrations/illustrations-multicolor"
    },{
      icon: "https://assets-global.website-files.com/5bcb46130508ef456a7b2930/5d3e60f773102c8158c55778_drawkit.png",
      detail: "美丽免费的插画库",
      name: "drawkit",
      href: "https://drawkit.com/"
    },{
      icon: "https://assets.website-files.com/5d5d5904f8a21bfe5ff69367/5da4e9a454896ed80730e86b_icon-256w.png",
      detail: "一套免费的开源插图!",
      name: "opendoodles",
      href: "https://www.opendoodles.com/"
    },]
  },{
    class: "UIDesign",
    siteList: [{
      icon: "https://cdn.dribbble.com/assets/dribbble-ball-192-23ecbdf987832231e87c642bb25de821af1ba6734a626c8c259a20a0ca51a247.png",
      detail: "发现世界最好的设计",
      name: "dribbble",
      href: "https://dribbble.com/"
    },{
      icon: "https://screenlane.com//static/website/images/icons/android-icon-192x192.png",
      detail: "APP UI交互",
      name: "screenlane",
      href: "https://screenlane.com/"
    },{
      icon: "https://collectui.com/img/favicon.ico",
      detail: "UI设计灵感收集",
      name: "collectui",
      href: "https://collectui.com/"
    },{
      icon: "https://reeoo.com/assets/favicon.ico",
      detail: "网页以及APP UI设计 ",
      name: "reeoo",
      href: "https://reeoo.com/"
    },{
      icon: "https://assets.awwwards.com/assets/images/favicon.svg",
      detail: "最好的网页设计",
      name: "awwwards",
      href: "https://www.awwwards.com/"
    }]
  }]
}