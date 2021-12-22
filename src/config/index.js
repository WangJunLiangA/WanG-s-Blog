export default {

  //导航栏标题配置
  webTitle: {
    //导航栏显示标题
    name: "WanG",
    allName:"汪阿汪的博客",
    allNameEn:"WanG's Blog",
    asideName:"home",
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
  footList:[
    {
      name: "goodSite", //国际化文件的Key
      router: "/home", //路由地址
    },
    {
      name: "tellMe",
      router: "/tellMe",
    },
    {
      name: "aboutMe",
      router: "/home",
    },
  ],
  
  //脚部标题
  footTitle:"@2021 Site By JunLiangWang",
  
  //语言前缀配置
  langPre: {
    navigation: "navigation.",
    foot:"foot."
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
  SocialLinkList: [
    {
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
  home:{
     title:"home.title",
     subTitle:"home.subtitle",
  }
}