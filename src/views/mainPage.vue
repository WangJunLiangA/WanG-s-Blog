/*
 * @Author: JunLiang.Wang 
 * @Date: 2021-12-20 15:36:05 
 * @Last Modified by:   JunLiang.Wang 
 * @Last Modified time: 2021-12-20 15:36:05 
 */
<template>
  <main>
    <navigation></navigation>
    <article><router-view /></article>
    <foot></foot>
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