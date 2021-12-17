<template>
  <main>
    <navigation ></navigation>
    <router-view/>
  </main>
</template>

<script>
import navigation from "@/components/navigation.vue";
export default {
  name: "mainPage",
  components: {
    navigation,
  }
};
</script>

<style>
</style>