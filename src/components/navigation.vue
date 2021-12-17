/*
 * @Author: JunLiang.Wang 
 * @Desc:Hader Navigation
 * @Date: 2021-12-17 10:51:30 
 * @Last Modified by: JunLiang.Wang
 * @Last Modified time: 2021-12-17 11:50:52
 */
<template>
  <header>
    <ul class="nav-ul">
      <!--Logo部分内容-->
      <li class="logo-item" @click="$router.push(title.router)">
        <logo class="logo"></logo>
        <a class="title">{{ $t(title.name) }}</a>
      </li>
      <!---------------->

      <!----导航栏按钮--->
      <ul class="nav-ul">
        <!--页面跳转按钮列表-->
        <li
          v-for="(item, index) in list"
          :class="
            'nav-item item-btn pc-item ' +
            (item.router == $route.path ? 'active-item' : '')
          "
          :key="index"
        >
          <a @click="$router.push(item.router)">{{ $t(item.name) }}</a>
        </li>
        <!------------------->

        <!--模式切换-->
        <li class="nav-item">
          <span
            :class="
              'iconfont modelbtn ' +
              (model == 'light' ? 'iconanyemoshi' : 'iconbaitianmoshi')
            "
            @click="changeModel"
          ></span>
        </li>
        <!------------>

        <!--语言切换-->
        <li class="nav-item">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="lanbtn">{{ $i18n.locale == "en" ? "EN" : "简" }}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh">简体中文</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <!----------->

        <!--mobile目录按钮-->
        <li class="nav-item">
          <div
            :class="'shrink-div ' + (shrink ? 'close' : '')"
            @click="shrink = !shrink"
          >
            <span class="hor-line"></span>
            <span class="hor-line line-center"></span>
            <span class="hor-line"></span>
          </div>
          <transition name="fade-in">
            <div v-if="shrink" class="mo-nav-div">
              <div class="mo-nav-div-item">
                <logo class="logo"></logo>
                <a class="title">{{ $t(title.name) }}</a>
              </div>
              <ul class="nav-ul mobile-ul">
                <!--页面跳转按钮列表-->
                <li
                  v-for="(item, index) in list"
                  :class="
                    'mobile-nav-item item-btn  ' +
                    (item.router == $route.path ? 'active-item' : '')
                  "
                  :key="index"
                >
                  <a @click="routerPage(item.router)">{{ $t(item.name) }}</a>
                </li>
                <!------------------->
              </ul>
              <p style="text-align: center">@2021 Site By JunLiangWang</p>
            </div>
          </transition>
        </li>
        <!----------->
      </ul>
      <!---------------->
    </ul>
  </header>
  <!--导航栏响应式适配
      1.优化代码
  -->
</template>

<script>
import logo from "./logo.vue";
export default {
  name: "navigation",
  props: {
    list: {
      type: Array,
      default: () => [
        {
          name: "technology",
          router: "/technology",
        },
        {
          name: "project",
          router: "/project",
        },
        {
          name: "book",
          router: "/book",
        },
        {
          name: "journey",
          router: "/journey",
        },
        {
          name: "diary",
          router: "/diary",
        },
      ],
    },
    title: {
      type: Object,
      default: () => {
        return {
          name: "WanG",
          router: "/home",
        };
      },
    },
    model: {
      type: String,
      default: "light",
    },
  },
  data() {
    return {
      shrink: false,
    };
  },
  components: {
    logo,
  },
  methods: {
    changeModel() {
      this.$emit("changeModel");
    },
    handleCommand(command) {
      this.$i18n.locale = command;
    },
    routerPage(rot){
      this.$router.push(rot);
      this.shrink=false;
    }
  },
};
</script>
<style lang="css" scoped>
header {
  display: flex;
  padding: 20px;
  justify-content: center;
}
.nav-ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding-inline-start: 0;
}
header > .nav-ul {
  max-width: 950px;
  width: 100%;
}
.logo-item {
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  transition: all ease-in 0.3s;
}
.logo {
  width: 65px;
  background: transparent;
}
.logo-item:hover > .logo {
  -webkit-animation: rotate-in-center 0.11s ease-in-out 4 alternate-reverse none;
  animation: rotate-in-center 0.11s ease-in-out 4 alternate-reverse none;
}
.logo-item:hover {
  transform: scale(1.1);
}
.title {
  font-size: 1.6em;
  font-weight: bold;
  color: #9e1900;
}
.nav-item {
  font-size: 1em;
  margin-left: 15px;
}
.mobile-nav-item {
  font-size: 1.3em;
  margin-left: 0;
  margin-top: 30px;
  margin-bottom: 30px;
}
.modelbtn {
  cursor: pointer;
  margin-left: 20px;
}
.modelbtn:hover {
  text-shadow: 0 0 12px #7c7979;
}
.item-btn {
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
}
.item-btn:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -6px;
  width: 0;
  height: 3px;
  background: #9e1900;
  transition: all 0.3s;
}
.item-btn:hover:before,
.active-item::before {
  width: 100%;
  left: 0;
  right: 0;
  color: #9e1900;
}
.lanbtn {
  cursor: pointer;
  padding: 3px;
  border-radius: 3px;
}
.lanbtn:hover {
  background: #90909042;
}

.shrink-div {
  height: 18px;
  width: 20px;
  display: none;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  z-index: 2000;
}
.hor-line {
  width: 100%;
  height: 3px;
  margin-bottom: 3px;
  transition: all 0.3s;
  z-index: 2000;
}
.light .hor-line {
  background-color: #1d1d1f;
}
.dark .hor-line {
  background-color: #fafafa;
}

.close .line-center {
  opacity: 0;
}

.close .hor-line:first-child {
  transform: translateY(200%) rotate(45deg);
}

.close .hor-line:last-child {
  transform: translateY(-200%) rotate(-45deg);
}

.mo-nav-div {
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}
.light .mo-nav-div {
  background: #dedede;
}
.dark .mo-nav-div {
  background: #343333;
}
.mo-nav-div-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background: transparent;
  height: 40px;
}
.mo-nav-div * {
  background: transparent;
}
.mobile-ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
}
/*移动动画*/
.fade-in-enter-active {
  -webkit-animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

.fade-in-leave-active {
  -webkit-animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) reverse
    both;
  animation: fade-in 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) reverse both;
}

/* ----------------------------------------------
 * Generated by Animista on 2021-7-23 1:49:5
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in
 * ----------------------------------------
 */
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/**
 * ----------------------------------------
 * animation rotate-in-center
 * ----------------------------------------
 */
@-webkit-keyframes rotate-in-center {
  0% {
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg);
  }
  100% {
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
  }
}
@keyframes rotate-in-center {
  0% {
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg);
  }
  100% {
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
  }
}

@media (max-width: 730px) {
  .pc-item {
    display: none;
  }
  .logo {
    width: 45px;
  }
  .title {
    font-size: 1.3em;
  }
  .shrink-div {
    display: flex;
  }
} ;
</style>