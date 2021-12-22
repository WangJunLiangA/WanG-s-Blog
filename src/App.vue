<template>
  <div id="app" :class="$store.state.model">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>
