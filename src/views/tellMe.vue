<template>
  <div id="test" style="margin:200px">asd</div>
</template>

<script>
import Valine from "valine";
export default {
  name: "tellMe",
  mounted() {
    new Valine({
      el: "#test",
      appId: "OyyAg6yxyrO2lJPHzsmAS9Qx-gzGzoHsz",
      appKey: "l15cP5C1CwANIiis4Q4D0t8t",
       visitor: true // 阅读量统计
    });
  },
};
</script>

<style>
</style>