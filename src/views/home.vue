/*
 * @Author: JunLiang.Wang 
 * @Date: 2021-12-20 12:05:55 
 * @Last Modified by: JunLiang.Wang
 * @Last Modified time: 2021-12-20 16:13:56
 */
<template>
  <section :class="'column ver-hor-center ' + $i18n.locale">
    <!--主标题-->
    <p class="title">{{ $t("home.title") }}</p>
    <!--------->

    <!--副标题-->
    <p class="sub-title">{{ $t("home.subtitle") }}</p>
    <!--------->

    <!--社交软件链接列表-->
    <div class="icon-list row ver-hor-center">
      <a
        v-for="(item, index) in SocialLinkList"
        :key="index"
        :href="item.href"
        target="_blank"
        ><i :class="'iconfont ' + item.icon"></i
      ></a>
    </div>
    <!--------------->
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      SocialLinkList: [
        {
          icon: "icongithub",
          href: "https://github.com/JunLiangWang-X",
        },
        {
          icon: "icontuitetwitter43",
          href: "https://twitter.com/dgvDTmueK8pFwAY",
        },
        {
          icon: "icongitee",
          href: "https://gitee.com/coder_wan",
        },
        {
          icon: "iconbilibilix",
          href: "https://space.bilibili.com/339798658",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
section {
  height: 100%;
  width: 100%;
}
p {
  margin: 0;
}
.title {
  font-size: 60px;
  font-weight: bold;
}
.zh .title {
  letter-spacing: 15px;
}
.en .title {
  word-spacing: 10px;
}
.sub-title {
  margin-top: 20px;
  font-size: 20px;
  color: #9e1900;
  font-weight: bold;
}
.zh .sub-title {
  letter-spacing: 7px;
}
.en .sub-title {
  word-spacing: 10px;
}
.icon-list {
  margin-top: 25px;
}
i {
  font-size: 30px;
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
}
.dark i {
  color: #7a7a7a;
}
.light i {
  color: #b9b9b9;
}
i:hover {
  transform: scale(1.1);
}
.dark i:hover {
  color: #d0d0d0;
}
.light i:hover {
  color: #676767;
}
a {
  text-decoration: none;
}
@media (max-width: 730px) {
  .zh .title {
    font-size: 50px;
  }
  .zh .sub-title {
    font-size: 10px;
  }
}
@media (max-width: 590px) {
  .en {
    padding-left: 8px;
    width: auto;
  }
  .en .title {
    font-size: 90px;
  }
  .en .sub-title {
    line-height: 25px;
    word-spacing: 8px;
  }
  .en .icon-list {
    margin-bottom: 40px;
  }
}
</style>