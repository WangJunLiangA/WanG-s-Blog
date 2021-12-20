/*
 * @Author: JunLiang.Wang 
 * @Date: 2021-12-20 15:35:44 
 * @Last Modified by: JunLiang.Wang
 * @Last Modified time: 2021-12-20 16:10:19
 * @props: (footTitle) footer Title
           (linkList) footer link List
           (langPre) internationalization file prefix

 */
<template>
  <footer class="column ver-hor-center">

    <!--链接列表-->
    <div>
      <a
        v-for="(item, index) in linkList"
        :key="index"
        @click="$router.push(item.router)"
        >{{ $t(langPre + item.name) }}</a
      >
    </div>
    <!------------>

    <!--脚标题-->
    <p>{{ footTitle }}</p>
    <!--------->
  </footer>
</template>

<script>
export default {
  name: "foot",
  props: {
    //脚标题
    footTitle: {
      type: String,
      default: "@2021 Site By JunLiangWang",
    },
    //国际化文件的前缀
    langPre: {
      type: String,
      default: "foot.",
    },
    //脚步链接列表
    linkList: {
      type: Array,
      default: () => [
        {
          name: "goodSite", //国际化文件的Key
          router: "/home", //路由地址
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