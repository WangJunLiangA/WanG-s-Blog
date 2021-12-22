<template>
  <section class="container">
    <header class="header">
      <p class="title">{{ $t(config.langPre.goodSite + "goodSite") }}</p>
    </header>
    <article
      class="block"
      v-for="(item, index) in config.goodSiteLinkList"
      :key="index"
    >
      <header>
        <p class="subTitle">{{ $t(config.langPre.goodSite + item.class) }}</p>
      </header>
      <div>
        <ul class="siteList">
          <li class="site" v-for="(site, index) in item.siteList" :key="index">
            <a :href="site.href" target="_blank" class="siteLink">
              <img class="siteImg" :src="site.icon" />
              <div class="siteContent">
                <h4>{{ site.name }}</h4>
                <p>{{ site.detail }}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "goodSite",
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 720px;
  margin: auto;
}
.header {
  margin-bottom: 50px;
}
.title {
  font-size: 25px;
  font-weight: bold;
}
.block {
  margin-top: 20px;
}
.subTitle {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
}
.siteList {
  list-style: none;
  margin: 0px 0px 1.5rem;
  padding-inline-start: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.site {
  height: 70px;
  box-sizing: border-box;
  padding: 10px;
  border: 0.1rem #e6e6e6 solid;
  display: flex;
  cursor: pointer;
  width: 48%;
  margin-bottom: 15px;
  border-radius: 4px;
  transition: all ease-in 0.2s;
}
.site:hover {
  box-shadow: 0 0 14px 1px #e4e4e4;
}
.siteLink {
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
}
.siteImg {
  width: 50px;
  height: 100%;
}
.siteContent {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding-left: 10px;
  width: calc(100% - 50px);
}
.siteContent p {
  margin: 0;
  font-size: 11px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.siteContent h4 {
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
@media (max-width: 740px) {
  .site {
    width: 100%;
  }
}
</style>