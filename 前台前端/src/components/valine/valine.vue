<template>
  <div id="valine" style="width: 100%"></div>
</template>

<script>
import Valine from "valine";
export default {
  name: "valine",
  mounted() {
    new Valine({
      el: "#valine",
      appId: "OyyAg6yxyrO2lJPHzsmAS9Qx-gzGzoHsz",
      appKey: "l15cP5C1CwANIiis4Q4D0t8t",
      visitor: true, // 阅读量统计
      lang: this.$i18n.locale,
      enableQQ: true,
      avatar: "retro",
      path: window.location.pathname,
    });
  },
};
</script>
