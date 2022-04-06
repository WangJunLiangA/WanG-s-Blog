/*
 * @Author: JunLiang.Wang 
 * @Date: 2021-12-18 01:11:47 
 * @Last Modified by: JunLiang.Wang
 * @Last Modified time: 2021-12-21 17:57:37
 * @props: (display) Is the navigation bar displayed
 * @solt: logo 、item and foot
 */
<template>
  <div v-if="display" class="mo-nav-div">
    <div class="mo-nav-div-item row ver-hor-center">
      <slot name="logo"></slot>
    </div>
    <slot name="item"></slot>
    <div>
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobileNav",
  props: {
    display: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
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

.mo-nav-div * {
  background: transparent;
}
.light .mo-nav-div {
  background: #dedede;
}
.dark .mo-nav-div {
  background: #343333;
}

.mo-nav-div-item {
  width: 100%;
  height: 40px;
}
</style>