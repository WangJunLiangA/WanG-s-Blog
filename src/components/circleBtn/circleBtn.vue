<template>
  <div class="btn" @click="iconClick">
    <i  :class="'iconfont '+icon"></i>
    <span class="tooltiptext">{{tiptext}}</span>
  </div>
</template>

<script>
export default {
    name:"circleBtn",
    props:{
        icon:{
            type:String,
            default:""
        },
        tiptext:{
            type:String,
            default:""
        }
    },
    methods:{
        iconClick(){
            this.$emit("iconClick");
        }
    }
    
};
</script>

<style scoped>
.btn {
  background: transparent;
  height: 25px;
  width: 25px;
  display: flex;
  flex-flow: column nowrap;
  place-content: center;
  align-items: center;
  border-radius: 100%;
  border: 1px solid rgb(250, 250, 250);
  cursor: pointer;
    position: relative;
}
.btn:hover{
    background:#747474;
}
.iconfont{
    background: transparent; 
    color: #fafafa; 
    font-size: 13px;
}
.btn:hover .tooltiptext{
    opacity: 1;
}
.tooltiptext{
    position: absolute;
    background: transparent;
    white-space: nowrap;
    font-size: 6px;
    bottom: -17px;
    color: #fafafa;
    opacity: 0;
}
</style>