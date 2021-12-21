<template>
  <article class="main row">
    <aside class="aside-left ">
      <div class="boxshadow  ver-hor-center column">
      <avatar :url="require('@/assets/img/logo.svg')" class="avatar"></avatar>
      <p class="title">汪阿汪的博客</p>
      <p class="sub-title">WanG's Blog</p>
      <ul class="nav-ul row ver-hor-center">
        <li class="nav-item" v-for="(item, index) in list" :key="index">
          <circle-btn
            @iconClick="$router.push(item.router)"
            :icon="item.icon"
            :tiptext="item.tiptext"
          ></circle-btn>
        </li>
        <li class="nav-item">
          <circle-btn
            @iconClick="changeModel"
            :icon="
              $store.state.model == 'light'
                ? 'iconanyemoshi'
                : 'iconbaitianmoshi'
            "
            tiptext="模式切换"
          ></circle-btn>
        </li>
      </ul>
      <p class="content">
        我曾经坚信自己是一位理想主义者，后来发现自己连现实都未充分认识清楚，又谈何理想？
        曾经我觉得自己一定要去改变世界，后来我发现我理解错了，我的世界不是所有人的世界，我的世界就是我自己，我能做的就是改变自己。
        如今我总算找到了能为之奋斗一辈子的事情，我的女友和希望能在我离开这个世界前，能多认识世界一些！
       </p>
      <p class="content" style="margin-top:200px;">
        @2021 Site By JunLiangWang
      </p>
      </div>
    </aside>
    <article class="aside-right">
      <div id="valine" style="width: 100%"></div>
    </article>
  </article>
  <!--3.优化代码
  -->
</template>

<script>
import Valine from "valine";
import avatar from "../components/avatar/avatar.vue";
import circleBtn from "../components/circleBtn/circleBtn.vue";
export default {
  components: { avatar, circleBtn },
  name: "tellMe",
  data() {
    return {
      list: [
        {
          //按钮图标
          icon: "iconshouye",
          //路由地址
          router: "/home",
          tiptext:"主页"
        },
        {
          //按钮图标
          icon: "iconkexuejishu-",
          //路由地址
          router: "/technology",
          tiptext:"技术之美"
        },
        {
          icon: "iconkaiyuanzujian",
          router: "/project",
          tiptext:"开源项目"
        },
        {
          icon: "icondushu-",
          router: "/book",
          tiptext:"读书感悟"
        },
        {
          icon: "iconw_fengjing",
          router: "/journey",
          tiptext:"大好河山"
        },
        {
          icon: "iconcomiisfariji",
          router: "/diary",
          tiptext:"日记杂谈"
        },
      ],
    };
  },
  mounted() {
    new Valine({
      el: "#valine",
      appId: "OyyAg6yxyrO2lJPHzsmAS9Qx-gzGzoHsz",
      appKey: "l15cP5C1CwANIiis4Q4D0t8t",
      visitor: true, // 阅读量统计
      lang:this.$i18n.locale,
      enableQQ:true,
      avatar:"retro",
    });
  },
  methods: {
    //更改黑夜/白天模式
    changeModel() {
      this.$store.commit("changeModel");
    },
  },
  
};
</script>

<style scoped>
.aside-left {
  width: 34%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../assets/img/02.png"), url("../assets/img/04.jpg");
  min-width: 330px;
  overflow-y: auto;
}
.aside-right {
  width: 66%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  overflow-y: auto;
}
.boxshadow{
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background:transparent;
  min-height: 650px;
}
.dark .boxshadow{
  background:#00000094;
}
.avatar {
  height: 100px;
  width: 100px;
}
p {
  background: transparent;
  color: #ffffffcc;
  margin: 0;
}
.title {
  font-size: 20px;
  margin-top: 15px;
}
.sub-title {
  font-size: 18px;
  margin-top: 5px;
}
.content {
  font-size: 15px;
  margin-top: 20px;
 line-height: 20px;
  max-width:330px;
}
.nav-ul {
  list-style: none;
  margin: 0;
  padding-inline-start: 0;
  background: transparent;
  margin-top: 15px;
}
.nav-item {
  background: transparent;
  margin: 0 5px;
}

@media (max-width: 740px) {
  .main {
    display: block;
  }
  .aside-left{
     width: 100%;
    height: auto;

     overflow-y: hidden;
  }
  .aside-right{
     width: 100%;
    height: auto;

     overflow-y: hidden;
  }
  .boxshadow{
    min-height: auto;
  }  
  .content{
    display: none;
  }
}
</style>