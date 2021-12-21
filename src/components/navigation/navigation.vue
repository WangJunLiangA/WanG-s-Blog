/*
 * @Author: JunLiang.Wang 
 * @Desc:Hader Navigation
 * @Date: 2021-12-17 10:51:30 
 * @Last Modified by: JunLiang.Wang
 * @Last Modified time: 2021-12-21 15:00:37
 * @props: (list) List of navigation bar options,the detail structure in props
           (title) navigation left title,the detail structure in props
 */
<template>
  <header>
    <ul class="nav-ul">
      <!--Logo部分内容-->
      <li>
        <logo
          :name="title.name"
          @logoClick="$router.push(title.router)"
          class="header-logo"
          :langPre="langPre"
        >
        </logo>
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
          <a @click="$router.push(item.router)">{{
            $t(langPre + item.name)
          }}</a>
        </li>
        <!------------------->

        <!--模式切换-->
        <li class="nav-item">
          <span
            :class="
              'iconfont modelBtn ' +
              ($store.state.model == 'light'
                ? 'iconanyemoshi'
                : 'iconbaitianmoshi')
            "
            @click="changeModel"
          ></span>
        </li>
        <!------------>

        <!--语言切换-->
        <li class="nav-item">
          <lang-change-btn
            :currentLanguage="$i18n.locale"
            @changeCommand="handleCommand"
          ></lang-change-btn>
        </li>
        <!----------->

        <!--mobile目录按钮-->
        <li class="nav-item">
          <shrink-btn v-model="shrink"></shrink-btn>
          <transition name="fade-in">
            <mobile-nav :display="shrink">
              <template v-slot:logo>
                <logo
                  :name="title.name"
                  @logoClick="routerPage(title.router)"
                  :langPre="langPre"
                >
                </logo>
              </template>
              <template v-slot:item>
                <ul class="nav-ul column ver-hor-center">
                  <!--页面跳转按钮列表-->
                  <li
                    v-for="(item, index) in list"
                    :class="
                      'mobile-nav-item item-btn  ' +
                      (item.router == $route.path ? 'active-item' : '')
                    "
                    :key="index"
                  >
                    <a @click="routerPage(item.router)">{{
                      $t(langPre + item.name)
                    }}</a>
                  </li>
                  <!------------------->
                </ul>
              </template>
              <template v-slot:foot>
                <foot></foot>
              </template>
            </mobile-nav>
          </transition>
        </li>
        <!----------->
      </ul>
      <!---------------->
    </ul>
  </header>
</template>

<script>
import logo from "./components/logo.vue";
import langChangeBtn from "./components/langChangeBtn.vue";
import shrinkBtn from "./components/shrinkBtn.vue";
import mobileNav from "./components/mobileNav.vue";
import foot from "@/components/foot/foot.vue";
export default {
  name: "navigation",
  props: {
    //导航栏选项列表
    list: {
      type: Array,
      default: () => [
        {
          //导航栏显示的标题
          name: "technology",
          //路由地址
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
          //导航栏显示标题
          name: "WanG",
          //路由地址
          router: "/home",
        };
      },
    },
    langPre: {
      type:String,
      default:"navigation."
    },
  },
  data() {
    return {
      //是否显示导航栏（mobile端）
      shrink: false,
    };
  },
  components: {
    logo,
    langChangeBtn,
    shrinkBtn,
    mobileNav,
    foot,
  },
  methods: {
    //更改黑夜/白天模式
    changeModel() {
      this.$store.commit("changeModel");
    },
    //更改语言
    handleCommand(command) {
      this.$i18n.locale = command;
    },
    //跳转页面
    routerPage(rot) {
      this.$router.push(rot);
      this.shrink = false;
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
  padding-inline-start: 0;
}

header > .nav-ul {
  max-width: 950px;
  width: 100%;
}
.header-logo {
  height: 60px;
}
.nav-item {
  font-size: 1em;
  margin-left: 15px;
}
.modelBtn {
  cursor: pointer;
}
.modelBtn:hover {
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

.mobile-nav-item {
  font-size: 1.3em;
  margin-left: 0;
  margin-top: 30px;
  margin-bottom: 30px;
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

@media (max-width: 730px) {
  .pc-item {
    display: none;
  }
  .header-logo {
    height: 45px;
  }
  .title {
    font-size: 1.3em;
  }
}
</style>