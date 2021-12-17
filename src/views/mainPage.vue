<template>
  <main>
    <navigation @changeModel="changeModel" :model="$store.state.model"></navigation>
    <router-view/>
  </main>
</template>

<script>
import navigation from "@/components/navigation.vue";
export default {
  name: "mainPage",
  components: {
    navigation,
  },
  methods:{
     changeModel(){
         this.$store.commit('changeModel');
     }
  },
  mounted(){
    console.info(this.$route) 
  }
};
</script>

<style>
</style>