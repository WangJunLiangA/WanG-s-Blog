/*
 * @Author: JunLiang.Wang 
 * @Date: 2021-12-18 00:31:42 
 * @Last Modified by: JunLiang.Wang
 * @Last Modified time: 2021-12-18 01:08:22
 * @props: (v-model) shrink(false) or open(true) two state
 * @methods: none
 */

<template>
  <div
    :class="'shrink-div ' + (shrink ? 'close' : '')"
    @click="shrink = !shrink"
  >
    <span class="hor-line"></span>
    <span class="hor-line line-center"></span>
    <span class="hor-line"></span>
  </div>
</template>

<script>
export default {
    name:"shrinkBtn",
    props:{
        value:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            shrink:this.value
        }
    },
    watch:{
        value(val){
            this.shrink=val
        },
        shrink(val){
            this.$emit("input",val);
        }
    }
};
</script>

<style scoped>

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


@media (max-width: 730px) {
  .shrink-div {
    display: flex;
  }
}
</style>