/*
 * @Author: JunLiang.Wang 
 * @Desc:Hader Navigation
 * @Date: 2021-12-17 10:51:30 
 * @Last Modified by: JunLiang.Wang
 * @Last Modified time: 2021-12-17 10:57:35
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
            'nav-item item-btn ' +
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
        
      </ul>
      <!---------------->

    </ul>
  </header>
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
</style>