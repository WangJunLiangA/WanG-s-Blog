import webConfig from './webConfig'

//动态修改网站名称
window.document.title=webConfig.webName;
const changeFavicon = link => {
    let $favicon = document.querySelector('link[rel="icon"]');
    // If a <link rel="icon"> element already exists,
    // change its href to the given link.
    if ($favicon !== null) {
      $favicon.href = link;
      // Otherwise, create a new element and append it to <head>.
    } else {
      $favicon = document.createElement("link");
      $favicon.rel = "icon";
      $favicon.href = link;
      document.head.appendChild($favicon);
    }
};
// 动态修改网站图标
changeFavicon(require("@/assets/"+webConfig.webIcon)); 
export default {

}