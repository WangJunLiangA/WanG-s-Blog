<template>
  <main>
    <navigation></navigation>
    <article><router-view/></article>
    <footer></footer>
  </main>
</template>

<script>
import navigation from "@/components/navigation/navigation.vue";
export default {
  name: "mainPage",
  components: {
    navigation,
  }
};
</script>

<style scoped>
.navigation{
  height: 100px;
}
footer{
  height:100px;
}
article{
    height: calc( 100% - 200px );
    padding: 20px;
    box-sizing: border-box;
}
</style>