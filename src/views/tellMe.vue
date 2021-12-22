<template>
  <article class="main row">
    <aside class="aside-left ">
      <div class="boxshadow  ver-hor-center column">
      <avatar :url="require('@/assets/img/logo.svg')" class="avatar"></avatar>
      <p class="title">{{config.webTitle.allName}}</p>
      <p class="sub-title">{{config.webTitle.allNameEn}}</p>
      <ul class="nav-ul row ver-hor-center">
        <li class="nav-item" >
          <circle-btn @iconClick="$router.push(config.webTitle.router)"
            :icon="config.webTitle.icon"
            :tiptext="config.webTitle.asideName"
            :langPre="config.langPre.navigation"
          ></circle-btn>
        </li>
        <li class="nav-item" v-for="(item, index) in config.navList" :key="index">
          <circle-btn
            @iconClick="$router.push(item.router)"
            :icon="item.icon"
            :tiptext="item.name"
            :langPre="config.langPre.navigation"
          ></circle-btn>
        </li>
        <li class="nav-item">
          <circle-btn
            @iconClick="changeModel"
            :icon="$store.state.model == 'light'
                ? 'iconanyemoshi'
                : 'iconbaitianmoshi'
            "
            tiptext="modelChange"
            :langPre="config.langPre.navigation"
          ></circle-btn>
        </li>
      </ul>
      <p class="content">
        {{$t("tellMe.content")}}
       </p>
      <p class="content" style="margin-top:200px;">
      {{config.footTitle}}
      </p>
      </div>
    </aside>
    <article class="aside-right">
      <div id="valine" style="width: 100%"></div>
    </article>
  </article>
</template>

<script>
import Valine from "valine";
import avatar from "../components/avatar/avatar.vue";
import circleBtn from "../components/circleBtn/circleBtn.vue";
export default {
  components: { avatar, circleBtn },
  name: "tellMe",
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