<template>
  <div id="app" :class="$store.state.model">
    <router-view/>
  </div>
  <!--优化代码，
     1.写你对我说
     2.关于我的
     3.好站推荐
     -->
</template>

<script>
export default {
  name: "app",
};
</script>
