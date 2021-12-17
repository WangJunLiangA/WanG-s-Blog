/*
 * @Author: JunLiang.Wang 
 * @Date: 2021-12-17 18:07:47 
 * @Last Modified by: JunLiang.Wang
 * @Last Modified time: 2021-12-18 01:38:22
 * @props: (languageList)Store a list of all languages. See props for the specific structure
           (currentLanguage)current select Language Key
 * @methods: (handleCommand) This event is triggered when change language
 */
<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <span class="lanbtn">{{ languageList[currentLanguage].displayTitle }}</span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(val,key,i) in languageList" :key="i" :command="key">{{val.itemTitle}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "langChangeBtn",
  props: {
    //语言列表
    languageList: {
      type: Object,
      default: () => {
        return {
          //语言Key,与i8n中的key对应
          zh: {
            itemTitle: "简体中文", //列表选项中显示的标题
            displayTitle:"简"   //选中后按钮显示的值
          },
          en:{
            itemTitle: "English",
            displayTitle:"EN"
          }
        };
      },
    },
    //当前选中的语言的Key
    currentLanguage:{
        type:String,
        default:"zh"
    }
  },
  methods:{
      //更换语言事件,command为选中语言的key
      handleCommand(command){
        this.$emit("changeCommand",command)
      }
  }
};
</script>

<style scoped>
.lanbtn {
  cursor: pointer;
    padding: 4px 2px;
  border-radius: 3px;
}
.lanbtn:hover {
  background: #90909042;
}
</style>