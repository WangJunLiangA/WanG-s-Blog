<template>
  <img :src="url"/>
</template>

<script>
export default {
   name:"avatar",
   props:{
       url:{
           type:String,
           default:""
       }
   }
}
</script>
<style lang="css" scoped>
img{
    object-position: center;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: solid 3px #d9d9d9;
    box-shadow: 0 0 8px 0px #363636;
    background:white;
}
</style>
