/*
 * @Author: JunLiang.Wang 
 * @Date: 2021-12-20 15:35:44 
 * @Last Modified by:   JunLiang.Wang 
 * @Last Modified time: 2021-12-20 15:35:44 
 */
<template>
  <footer class="column ver-hor-center">
    <div>
      <a
        v-for="(item, index) in linkList"
        :key="index"
        @click="$router.push(item.router)"
        >{{ $t(langPre + item.name) }}</a
      >
    </div>
    <p>{{ footTitle }}</p>
  </footer>
</template>

<script>
export default {
  name: "foot",
  props: {
    footTitle: {
      type: String,
      default: "@2021 Site By JunLiangWang",
    },
    langPre: {
      type: String,
      default: "foot.",
    },
    linkList: {
      type: Array,
      default: () => [
        {
          name: "goodSite",
          router: "/home",
        },
        {
          name: "tellMe",
          router: "/home",
        },
        {
          name: "aboutMe",
          router: "/home",
        },
      ],
    },
  },
};
</script>

<style scoped>
footer * {
  background: transparent;
}
a:first-child {
  border-left: none;
}
a {
  margin-right: 5px;
  padding-left: 5px;
  border-left: solid 1.5px #fafafa;
  font-size: 12px;
  cursor: pointer;
}
.dark a {
  border-left-color: #fafafa;
}
.dark a:hover {
  color: #505057;
  font-size: 14px;
}
.light a {
  border-left-color: #1d1d1f;
}
.light a:hover {
  color: #dbdbdb;
  font-size: 14px;
}
</style>