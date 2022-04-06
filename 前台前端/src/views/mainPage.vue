/*
 * @Author: JunLiang.Wang 
 * @Date: 2021-12-20 15:36:05 
 * @Last Modified by: JunLiang.Wang
 * @Last Modified time: 2021-12-21 18:23:12
 */
<template>
  <main class="main">
    <!--头部导航栏-->
    <navigation
      :list="config.navList"
      :title="config.webTitle"
      :langPre="config.langPre.navigation"
      :languageList="config.languageList"
    >
      <foot
        :footTitle="config.footTitle"
        :langPre="config.langPre.foot"
        :linkList="config.footList"
      ></foot>
    </navigation>
    <!------------->

    <!--主要内容-->
    <article><router-view /></article>
    <!----------->

    <!--脚步导航栏-->
    <foot
      :footTitle="config.footTitle"
      :langPre="config.langPre.foot"
      :linkList="config.footList"
    ></foot>
    <!------------->
  </main>
</template>

<script>
import navigation from "@/components/navigation/navigation.vue";
import foot from "@/components/foot/foot.vue";
export default {
  name: "mainPage",
  components: {
    navigation,
    foot,
  },
};
</script>

<style scoped>
.navigation {
  height: 100px;
}
footer {
  height: 100px;
}
article {
  height: calc(100% - 200px);
  padding: 20px;
  box-sizing: border-box;
}
</style>