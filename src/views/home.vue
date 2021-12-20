/*
 * @Author: JunLiang.Wang 
 * @Date: 2021-12-20 12:05:55 
 * @Last Modified by:   JunLiang.Wang 
 * @Last Modified time: 2021-12-20 12:05:55 
 */
<template>
  <section :class="'column ver-hor-center ' + $i18n.locale">
    <p class="title">{{ $t("home.title") }}</p>
    <p class="sub-title">{{ $t("home.subtitle") }}</p>
    <div class="icon-list row ver-hor-center">
      <i class="iconfont icongithub"></i>
      <i class="iconfont iconbilibilix"></i>
      <i class="iconfont icontuitetwitter43"></i>
      <i class="iconfont icongitee"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",
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