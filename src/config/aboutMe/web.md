# WEB技术



## HTML5技术



1.要加快文档编写

2.争取在周末编写完成

3.Vue和Webpack





### HTML5的由来

HTML(Hyper Text Markup Language)超文本标记语言，早期用于传输结构化的文档，由于其格式混乱不严谨，W3C1998年决定停止维护并制定了XHTML更严谨整洁的规范来替代。但各大浏览器厂商并不对XHTML进行标准检查，开发人员仍能不遵守XHTML的规则，于是W3C制定了XHTML2规范，强制浏览器拒绝无效的XHTML2的页面，这导致Web开发人员必须改变以前的编码方式，但并不会因此带来更多的新功能，也让老的网站无法呈现，漫长的XHTML的制定过程使得最终失败。

在此期间Opera,Mozilla和苹果公司建议XHTML加入一些对开发人员有用的功能，但未被W3C采纳，结果他们自发组建了WHATWG致力于寻找新的解决方案，并补充了Web Application1.0和Web Forms 2.9方案，这就是HTML5的前身。

最终由于WHATWG获得全球Web开发者的空前支持，W3C解散XHTML2工作组，并致力于支持HTML5改造为正式标准。



### HTML5的设计思想

从XHTML的失败经验中，人们找到了制定HTML5规范的设计思想：

- 不破坏Web，不应该引入导致已有的网页无法工作的改变
- 标准化非官方但广泛应用的技术
- 实用至上，一切改变都已实用为目的



### HTML5文档结构

```html
<!doctype html>
<html lang="ch">
    <head>
        <title>文档结构</title>
        <base target="_blank" />
        <script src="xxx.js"></script>
        <link rel="icon" type="/image/x-icon" href="xxxx.ico" size="">
        <link rel="stylesheet" href="xxx.css" media="print">
        <mate charset="utf-8"></mate>
    </head>
    <body>
        <p>文档</p>
    </body>
</html>
```

#### H5文档类型：<!doctype html>

文档类型声明必须放在首行，它表示了文档遵守哪个标准，便于浏览器解析

> 两种解析模式：混杂模式与标准模式

- 混杂模式：当没有文档类型声明，浏览器进入混杂模式解析，不同浏览器混杂模式不一致，会导致解析内容混乱不堪
- 标准模式：存在文档类型声明，浏览器根据声明类型进入标准模式解析，所有浏览器都会使用一致的格式解析呈现文档

> 其他文档类型声明

- XHTML1.0:<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
- XHTML1.1：<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
- HTML4.1:<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

#### 文档分块：html、body、head元素

上述三种标签可以把文档区分为关于页面的头部信息和页面实际内容主体两部分内容，通过分块避免混乱。在实际编写HTML代码时可以省略不写，浏览器会自动帮您包含这些元素，但从代码可读性的角度来看并不建议这样做

> <html lang="ch"> 为页面指定语言，这样做的好处是能够使得搜索引擎返回与用户相一致的语言内容，屏幕阅读器可根据语言朗诵内容，lang属性可添加到任意元素，指明内容语言。

#### 文档标题：title

指定文档标题，省略该属性浏览器会将文件名作为文档标题

#### 所有链接一个目标：base

指明文档中未指定target属性的链接打开窗口行为，通过target属性指明行为

| 属性   | 值                                                           |
| ------ | ------------------------------------------------------------ |
| target | _blank     在新窗口中打开被链接文档。<br /> _parent    在父框架集中打开被链接文档。<br /> _self           在相同的框架中打开被链接文档<br /> _top          在整个窗口中打开被链接文档。<br />framename  在指定的框架中打开被链接文档。 |

#### 定义客户端脚本：script

script 元素指明客户端所使用的脚本语言，它既可以包含脚本语句，也可以通过 src 属性指向外部脚本文件，

可通过 type 属性规定脚本的 MIME 类型，具体会在javascript技术说明。

#### 定义文档与外部资源的关系：link



#### 头部辅助标签：meta



### HTML兼容

浏览器对HTML标签的支持情况，一些浏览器对HTML标签不同的表现，以及特定浏览器不支持相关标签的处理办法

### HTML优化



# CSS技术



# 一、CSS的由来

CSS(Cascading Style Sheet)层叠样式表，1994年，正值Web技术广泛流行开来，CSS第一个提案发布了。他的目标是提供一个简单的文档声明样式语言，能够为单一乏味的HTML文档提供丰富的样式声明，把之前在HTML中混乱的样式标签给剥离出来，并且具有一定的灵活性，能够为文档编写人员和用户提供样式化功能。

<div style="display:flex;width:100%;height:300px;"><div style="flex:1;height:100%;border:solid 1px black"><h1>未加入样式表</h1><h2>
    这是一个二级标题</h2><h3>
    这是一个三级标题
    </h3>
    </h2></div><div style="flex:1;height:100%;border:solid 1px black"><h1 style="color:red;">加入样式表</h1><h2 style="margin-left:2em;color:yellow;">
        这是一个二级标题
        </h2><h3 style="margin-left:4em;color:blue;">
        这是一个三级标题
        </h3></div></div>

1996年CSS1完成了，CSS逐渐开始流行起来。CSS2于1998年定案，随后CSS工作组立即投身CSS3的制定和CSS2的修订(CSS2.1)工作中。CSS3与以往不同的是它以多个独立的模块构成，而不是单独一个臃肿的规范，这样使得制定工作可以各模块独立演进，而不受其他模块的影响。因此"CSS3规范"这种说法不再存在，与之替代的是某个模块是否达到了Level 3，例如：CSS Color Level3、Selectors Level3。所以我们在学习CSS3的时候，因当分模块学习不同的特性。 



# 二、CSS基础



## 1.HTML引入CSS方式



### ①link标签引入：外部样式表

> 通过HTML头部信息的link标签引入CSS样式表，这种方式引入的样式表被称为外部样式表

```html
<head>
    <link rel="stylesheet" type="text/css" href="sheet1.css" media="all" title="default">
    <link rel="stylesheet" type="text/css" href="sheet2.css" media="print" title="big">
</head>
```

> link相关属性说明

- rel(relation):指定文档与引入资源关系，引入CSS时，rel=“stylesheet”或者rel="alternate"
- type:指定引入资源文件的MIME类型，引入CSS文件时，type="text/css"
- href:指定引入资源文件的路径
- media:媒体查询描述符，指定那种媒体才加载资源，默认media="all",所以媒体都加载(后续会详细说明)
- title:指定引入CSS标题

> 候选样式表

定义rel属性为alternate值时，指定引入CSS为候选样式，当用户选择指定title的样式时才可以使用样式表渲染，利用该特性可以制作白天/黑夜模式供用户选择。

```html
<link rel="stylesheet" type="text/css" href="cs.css" title="day">
<link rel="alternate" type="text/css" href="test.css" title="night">
```

[^注]: 当指定多个相同title的样式表或候选样式表，且media媒体查询也一致，此时文档只会使用其中一个，具体使用那一个不确定。如果不为样式表指定标题，那它就是永久样式表，始终使用它渲染文档样式。

### ②style标签引入：文档样式表|内嵌样式表

```html
<head>
    <style type="text/css" media="all">
        p{ color:red; }
    </style>
</head>
```

> style相关属性

- type:指定引入资源文件的MIME类型，这里的type始终为"text/css"
- media:媒体查询描述符，指定那种媒体才加载资源，media="all",所有媒体都加载(后续会详细说明)

### ③@import指令引入：外部样式表

```html
<style type="text/css">
    @import url("./css.css") screen,print;
</style>
```

> @import指令详解：@import url('url') media

- url('  '):括号内指定引入资源文件的路径
- media:媒体查询描述符，跟在url后面，指定那种媒体才加载资源，多个媒体查询用逗号隔开，media="all",所有媒体都加载(后续会详细说明)

[^注]: 为什么link能引入外部样式，还会存在@import呢？因为当一个外部样式表需要引用另一个外部样式表时不能使用link标签，只能使用@import

### ④行内样式

> 通过为HTML的元素标签，指定style属性编写CSS代码引入CSS样式，这种方式引入的样式表被称为行内样式

```html
<p style="color:red;">这个是一个HTML标签</p>
```



## 2.HTML文档相关概念

> 元素是文档的基本组成单位，常见的元素有p、table、span、a和div等

### ①置换元素与非置换元素

> CSS依赖元素，但并非每个元素都以同样的方式创建。对CSS来说，元素通常有两种形式：置换元素和非置换元素

- 置换元素：元素内容部分不由文档内容直接表示，常见的置换元素：img，input，textarea， select，object，buttom，iframe等

<div style="width:100%;height:150px;border:solid 1px black;display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
            "><img style="width:50px;height:50px;" src="https://vuejs.org/images/logo.svg"/><div style="display;flex;">
    <input type="radio" >我是一个input
    </div></div>

- 非置换元素：元素内容直接由浏览器在元素自身生成的框中显示，HTML大多数是非置换元素

<div style="width:100%;height:150px;border:solid 1px black;text-align:center;"><h1 >我是一个H1</h1><p>
    我是一个p
    </p><span>我是一个span</span></div>

### ②元素显示方式

> 除了置换元素与非置换元素之外，CSS还把元素分成块级和行内两种基本显示类型

- 块级元素：默认生成一个填满父级元素内容区的框，旁边不能有其他元素

<div style="width:100%;border:solid 1px black;">
    <div style="display:block;border:solid 1px red;height:50px;margin:20px;">
        我是一个块级元素
    </div>
    <div style="display:block;border:solid 1px red;height:50px;margin:20px;">
        我也是一个块级元素
    </div>
</div>

- 行内元素：在一行文本内生成元素框，不打断所在行

<div style="width:100%;height:150px;border:solid 1px black;display:flex;align-items:center;justify-content:center;">
    <span style="border:solid 1px red;margin:20px;">
        我是一个行内元素
    </span>
    <span style="border:solid 1px red;margin:20px;">
        我也是一个行内元素
    </span>
</div>

[^注]: 在HTML中，块级元素不能出现在行内元素中，反之则可以。但是CSS并不限制他们他们的显示方式，相互可以嵌套



# 三、CSS选择器



## 1.元素选择器

> 元素选择符通常是HTML元素。在XML中，什么都可以作为元素选择符，因为XML允许创建新的标记

```css
/*p标签会匹配该样式*/
p{
  color:red;
}
```



## 2.通配符选择器

> 匹配所有元素

```css
/*所有元素字体颜色为红色*/
*{
  color:red;
}
```



## 3.类选择器

> 选择与元素class属性一致的元素（用于选择一类元素）

```css
/*选择class有my的元素*/
.my{
  color:red;
}
/*选择class中有my you me 的元素*/
.my.you.me{
    color:red;
}
```



## 4.ID选择器

> 选择与元素ID属性一致的元素（用于选择某个元素）

```css
/*选择ID=mainHeader的元素*/
#mainHeader{
 color:red;
}
```



## 5.属性选择器

> 在其他标记语言中类选择符和ID选择符可能无法使用，为解决该问题引入了根据属性及其值选择元素

### ①简单属性选择器

```css
h1[class]{
  color:red
}
/*文档中h1拥有class属性(属性值不限)的元素颜色为red*/
img[alt]{
    border:3px solid red;
}
/*文档中img拥有alt属性(属性值不限)的元素边框*/
*[title]{
    color:red
}
/*文档中所有拥有title属性(属性值不限)的元素颜色为红色*/
a[href]{
    color:blue
}
/*文档中a拥有href属性(属性值不限)的元素颜色为蓝色*/
```

### ②具体属性选择器

```css
h1[class="ad ac"]{
  color:red
}
/*文档中h1拥有class属性值为ad ac的元素颜色为红色*/
```

### ③部分属性选择器

```css
/*与h1.ad{}等价*/
h1[class~="ad"]{
  color:red
}
/*文档中h1拥有title属性值开头为bar的元素颜色为红色*/
h1[title^="bar"]{
    color:red
}
/*文档中h1拥有title属性值结尾为bar的元素颜色为红色*/
h1[title$="bar"]{
    color:red
}
/*文档中h1拥有title属性值包含bar子串的元素颜色为红色*/
h1[title*="bar"]{
    color:red
}
/*文档中所有拥有lang属性且属性值等于en或者以en-开头的元素为红色*/
*[lang|="en"]{
  color:red
}
/*在结束符添加i，匹配属性不区分大小写*/
a[href$="pdf" i]{
  color:red
}
```



## 6.分组选择器

> 可将同一个样式运用到多个元素

```css
p,a{
   color:red;
}
#ad,.my{
   color;red;
}
a[href$="pdf" i],p{
  color:red;
}
```



## 7.后代选择器(上下文选择器，包含选择器)

```css
div h1{
   color:red
}
/*文档中div元素中的h1元素的颜色为红色，无论div与h1的间隔层级*/
```

[^注]: 后代选择器只会改变最后的元素



## 8.子元素选择器

```css
div>h1{
  color:red
}
/*文档中div元素中第一层h1元素的颜色为红色*/
```



## 9.相邻选择器

```css
div+h1{
   color:pink
}
/*文档中与div相邻的h1的元素的颜色为粉色*/
```

[^注]: 类似<div>123</div>456<label>789</label> 456并不是div的相邻元素，而是父元素的一部分，但它仍然不影响div与label的相邻



## 10.伪类选择器

> 为某些元素的特定状态赋予幽灵类，根据元素当前状态匹配样式

### ①结构伪类

| 属性名               | 作用                                                         |
| -------------------- | ------------------------------------------------------------ |
| :root                | 选择文档根元素（<html>）                                     |
| :empty               | 选择没有任何子代的元素，甚至文本节点都没有                   |
| :only-child          | 选择一个元素作为子代的唯一的元素                             |
| :only-of-type        | 选择一个元素作为子代的同类型元素唯一的元素                   |
| :first-child         | 选择一个元素作为子代的第一个元素                             |
| :last-child          | 选择一个元素作为子代的最后一个元素                           |
| :first-of-type       | 选择一个元素作为子代同类型元素的第一个元素                   |
| :last-of-type        | 选择一个元素作为子代同类型元素的最后一个元素                 |
| :nth-child(n)        | 选择一个元素作为子代的第N个元素，示例：nth-child(1),nth-child(2n) |
| :nth-last-child(n)   | 选择一个元素作为子代的倒数第N个元素，注意：odd=2n-1,even=2n  |
| :nth-of-type(n)      | 选择一个元素作为子代同类型元素的第N个元素                    |
| :nth-last-of-type(n) | 选择一个元素作为子代同类型元素的倒数第N个元素                |

### ②动态伪类

| 属性名   | 作用                                       |
| -------- | ------------------------------------------ |
| :link    | 选择未访问的地址（超链接伪类）             |
| :visited | 选择已访问的地址（超链接伪类）             |
| :focus   | 选择当前获得输入焦点的元素（用户操作伪类） |
| :hover   | 选择鼠标指针放置其上的元素（用户操作伪类） |
| :active  | 选择用户激活的元素（用户操作伪类）         |

### ③UI状态伪类

| 属性名         | 作用                                                     |
| -------------- | -------------------------------------------------------- |
| :enable        | 选择启用的元素                                           |
| :disabled      | 选择禁用的元素                                           |
| :checked       | 选择（单选，多选或选项）选中的元素                       |
| :indeterminate | 选择（单选，多选或选项）既选中又选中的元素，只能脚本设定 |
| :default       | 选择默认选中的元素（单选，多选或选项）                   |
| :valid         | 选择满足数据校验的输入框                                 |
| :invalid       | 选择不满足数据校验的输入框                               |
| :in-range      | 选择在最大值与最小值之间的输入框                         |
| :out-of-range  | 选择不在最大值与最小值之间的输入框                       |
| :required      | 选择必填的元素                                           |
| :optional      | 选择无需必填的元素                                       |
| :read-write    | 选择可编辑的元素                                         |
| :read-only     | 选择不可编辑的元素                                       |

### ④目标伪类

> 借助：target伪类，我们可以凸显文档中被URL指向的文档片段目标

```css
/*当URL指向：http://www.w3.org#target-preudo该文档片段时选中*/
a:target{
   border:solid 1px black;
   color:red;		
}
```

### ⑤语言伪类

> 借助：lang(fr)根据内容语言选择元素

```css
/*匹配lang属性为ch的div元素*/
div:lang(ch){
   color:red;
}
```

### ⑥否定伪类

> 使用：not（）伪类来排除不匹配的元素

```css
/*选择class没有my的p元素*/
p:not(.my)
{
   color:red;
}
/*:not伪类只能依附在元素上，括号中只能是一个类选择器，通配符选择器，属性选择器，ID选择器或伪类选择器等简单选择器（简单选择器指没有祖辈-后代关系的选择符），:not()不能嵌套*/
```

### ⑦拼接伪类

> CSS允许把伪类拼接在一起

```css
a:focus:hover:lang(de)
{
  color:red;			
}
```



## 11.伪元素选择器

> 为了实现特定效果，他在文档中插入虚构的元素，用于改变样式

| 属性名         | 作用                             |
| -------------- | -------------------------------- |
| ::first-letter | 选择首字母（只能应用在块级元素） |
| ::first-line   | 选择首行（只能应用在块级元素）   |
| ::before       | 前置元素                         |
| ::after        | 后置元素                         |



# 四、结构和层叠

> 本章内容主要讲解css样式的匹配机制，试想下面的例子，P元素会适应那种样式，本章就会根据特殊性、继承和层叠样式三个方面说明CSS样式匹配的机制

```html
<!--例子-->
<style>
P{
   color:red
}
.warning{
   color:yellow
}
</style>
<P class="warning">abcd</p>
```



## 1.特殊性

> 选择器拥有特殊性，也可以叫优先级，当一个元素匹配了多种规则，元素就会根据规则的特殊性来应用相应的样式，特殊性值表述为4个部分，如：0，0，0，0。左高佑低，位高者胜出。

- 内联样式                                         1,0,0,0
- ID选择器                                          0,1,0,0
- 类选择器 属性选择器 伪类选择器  0,0,1,0
- 各元素选择器 伪元素选择器           0,0,0,1
- 通配符选择器                                   0,0,0,0

```css
例子：
*{color:yellow}           特殊性:0,0,0,0
h1{color:blue}            特殊性:0,0,0,1
p a{color:red}            特殊性:0,0,0,2
.clasP{color:black}       特殊性:0,0,1,0
#id{color:green}          特殊性:0,1,0,0
<p style="color:red"></p> 特殊性:1,0,0,0
```

> 注意：当多个规则特殊性也一致时，根据声明顺序应用样式，声明越后，优先级越高。在css2.1以前 特殊值只有3部分0,0,0。这意味着内联样式与ID选择器的特殊性一致
>



## 2.重要值

> 有时某个声明可以非常重要，优先级高于其他特殊性的声明，因此只需要在声明最后加上!important标记

```css
.a{
   color:red !important;
}
p{
    font:samller Times,serif !important;
}
```

> 注：标志为重要值的声明被没有特殊的特殊值，不过CSS匹配规则时会将重要值声明与非重要值声明分开处理，然后再根据特殊值来匹配，并且重要值声明优先级高于非重要值



## 3.继承

> 基于CSS的继承机制，匹配的样式不仅仅会应用到指定元素，还会应用到它的后代元素

```css
例子
h1{
   color:red
}
<h1>123<p>456</p><h1>
/*P元素中的内容也会是红色*/
```

> 注意：大多数框模型属性是不能被继承的(border,margin,padding,background等)。 继承没有特殊性，他比通配选择器0特殊性的优先级还低
>



## 4.层叠

> 上述讲解了部分CSS样式匹配的规则和过程，层叠则是利用上述内容对匹配的多个规则进行分解，然后一个个排序，然后层层叠加到元素中。

```
排序规则
1.读者的重要声明
2.开发者的重要声明
3.开发者的声明
4.读者的声明
5.用户代理声明

当有多个相同优先级的声明，则又会按照特殊性排序
1.内联样式
2.ID选择器
3.类选择器，属性选择器，伪类选择器
4.元素选择器，伪元素选择器
5.通配选择器
6.继承样式

当存在多个相同特殊性的声明时，则会按照声明顺序排序
1.声明在后的声明
2.声明在前的声明
3.引入的层叠样式表
```



# 五、值和单位



## 1.关键字

> 有时候值用一个词表示，这就叫关键字

| 关键字  | 作用                                                         |
| ------- | ------------------------------------------------------------ |
| inherit | 把元素某个属性设置为与父元素同一属性值                       |
| inital  | 把元素某个属性值设置为预定的初始值（重置默认值）             |
| unset   | 元素某个属性能够被继承则设置该属性为inherit，不能被继承则设置为inital |



## 2.数字和百分数

> 数字和百分数是其他很多类型的基础

| 类型名 | 类型         | 描述                                          |
| ------ | ------------ | --------------------------------------------- |
| 整数   | <integer>    | 数值中的整数值，例如-1,2,1199等               |
| 数字   | <number>     | 数值中的实数，例如3.134,-12,-1.234等          |
| 百分数 | <percentage> | 数字类型的值后跟一个百分号(%)，例如100%，2%等 |
| 弹性值 | 无           | 数字类型的值后跟一个fr，例如1fr，1.23fr等     |



## 3.距离

> 很多CSS属性要靠长度来衡量才能正确显示，长度值一般用正负数后跟一个标注表示。它分为绝对长度单位和相对长度单位

### ①绝对长度

| 长度名       | 单位 | 描述                                          |
| ------------ | ---- | --------------------------------------------- |
| 英寸         | in   | 1in=2.54cm=6pc=25.4mm=72pt=101.6q             |
| 厘米         | cm   | 1cm=10mm=0.394in=2.359pc=28.346pt=40q         |
| 派卡         | pc   | 1pc=12pt=0.167in=0.423cm=4.23mm=16.92q        |
| 毫米         | mm   | 1mm=4q=0.0394in=0.1cm=0.236pc=2.8346pt        |
| 点           | pt   | 1pt=1/72in=0.0353cm=0.083pc=0.353mm=1.412q    |
| 四分之一毫米 | q    | 1q=0.25mm=0.00985in=0.025cm=0.059pc=0.70865pt |
| 像素         | px   | 屏幕的像素点数量                              |

[^注]: CSS建议，如果屏幕的像素点与每英寸96像素点（pixels per inch，ppi）相差过大，应使用“参考像素”。CSS2建议90ppi为参考像素，css2.1和css3建议96ppi为参考像素

### ②相对长度单位

|      |      |      |
| ---- | ---- | ---- |
|      |      |      |
|      |      |      |
|      |      |      |





# N、媒体查询

> 开发人员可通过媒体查询定义浏览器在何种媒体环境中使用指定的样式表



## 1.媒体查询用法

- link元素上使用

```html
<link rel="stylesheet" href="te.css" type="text/css" media="all">
```

- style元素上使用

```html
<style type="text/css" media="all">
```

- @import声明上使用

```css
@import url("text.css") all
```

- @media单独使用

```html
<style type="text/css">
    @media all{
        p{
             color:red
          }
    }
</style>
```





## 2.媒体查询类型

> 媒体查询最基本的形式媒体类型

| 类型   | 描述                         |
| ------ | ---------------------------- |
| all    | 用于所以媒体                 |
| print  | 由于打印文档和预览打印时使用 |
| screen | 屏幕媒体上展示文档使用       |
| speech | 应用于屏幕阅读器等发声设备   |



## 3.媒体描述符

> 一个媒体描述符包含了一个媒体类型和一个或多个媒体特性描述符列表，其中媒体特性描述符放在括号中，如果没有媒体类型就应用在所以媒体上，媒体描述符能够进行更加细致的媒体查询。

```css
@media all and (min-resolution:96dpi) and (color)
{
    p{
        color:red
    }
}
@media (min-resolution:98dpi) and (color)
{
    p{
        color:red
    }
}
```

### ①媒体特性描述符

| 描述符                                                       | 作用                                                         | 值类型                                            |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------- |
| width，min-width，max-width                                  | 显示区域宽度，最小宽度，最大宽度（视区+滚动条）              | <length>                                          |
| device-width，min-device-width，max-device-width             | 设备整个渲染区域的宽度，最小宽度，最大宽度（屏幕的宽度）     | <length>                                          |
| height，min-height，max-height                               | 显示区域高度，最小高度，最大高度（视区+滚动条）              | <length>                                          |
| device-height，min-device-height，max-device-height          | 设备整个渲染区域的高度，最小高度，最大高度（屏幕的高度）     | <length>                                          |
| aspect-ratio，min-aspect-ratio，max-aspect-ratio             | width与height的比值，最小比值，最大比值                      | <ratio>                                           |
| device-aspect-ratio，min-device-aspect-ratio，max-device-aspect-ratio | device-width与device-height的比值，最小比值，最大比值        | <ratio>                                           |
| color，min-color，max-color                                  | 色彩分量的位数，(color)表示是否有色彩深度，(min-color:4)表示每个色彩分量至少4位数 | <integer>                                         |
| color-index，min-color-index，max-color-index                | 色彩搜寻列表中共有多少颜色，(min-color-index:256)表示至少有256种颜色可用的设备 | <integer>                                         |
| monochrome，min-monochrome，max-monochrome                   | 帧缓冲器中每像素有多少位。非单色设备返回0                    | <intger>                                          |
| resolution，min-resolution，max-resolution                   | 设备的分辨率，单位位dpi或dpcm，以像素较为稀疏一方为准        | <resolution>                                      |
| orientation                                                  | 显示区域放置的方向                                           | height>width:portrait<br />width>height:landscape |
| scan                                                         | 输出设备的扫描方式                                           | interlace\|progressive                            |
| grid                                                         | 是否基于格栅的输出设备                                       | 0\|1                                              |

### ②多个媒体特性描述符

> 当使用多个媒体特性描述符时该如何连接呢？

- and：连接的两个或多个媒体特性必须同时满足，真个查询得到真

```css
/*视区宽度最大1000px且最小宽度500px才能满足*/
@media screen and (max-width:1000px) and (min-width:500px)
{
    p{
        color:red
    }		
}
```

- not：对整个查询取反，not只能用在媒体查询的开头

```css
/*不是彩色设备且视区宽度不等于500px才满足*/
@media not (color) and (width:500px)
{
    p{
        color:red
    }
}
```

- 没有or，但存在or的写法

```css
/*视区宽度等于200px或宽度等于1000px才能满足*/
@media (width:200px),(width:1000px)
{
    p{
        color:red
    }
}
```



# N+1、特性查询

> 根据浏览器是否支持特定的CSS属性以及其值来应用一段样式

```css
/*支持color属性并能设置值为red就应用样式*/
@supports (color:red)
{
    p{
        color:red
    }
}
/*支持display属性并能设置值为flex且支持color属性并能设置值为black就应用样式*/
@supports (display:flex) and (color:black)
{
    p{
        color:red
    }
}
/*支持display属性并能设置值为flex或者支持display属性并能设置值为grid就应用样式*/
@supports (display:flex) or (display:grid)
{
    p{
        color:red
    }
}
/*不支持display属性设置值为flex就应用样式*/
@supports not(display:flex)
{
    p{
        color:red
    }
}
/*复杂的组合语法*/
@supports not( ((display:flex) and (display:grid)) or (color:red) )
{
    p{
        color:red
    }
}
```



# CSS兼容

浏览器对CSS属性支持情况，一些浏览器对CSS不同的表现，以及特定浏览器不支持的处理办法

# CSS优化





## JS技术



### JS的由来

网景公司希望在其Navigator浏览器加入脚本语言，来验证某个必填字段是否填写或者某个输入值是否有效，以此减少与服务器通信时间和用户等待时间，于是乎javascript诞生了。

随着网景公司js的成功，微软决定向IE投入更多资源，于是也发布了自己的脚本语言JScript。微软JScript出现意味着出现了两个版本的javascript，业界担忧网景和微软各行其是，那么Web就会分裂，导致人们面向浏览器开发，于是js踏上了标准化的征程。

1997年，JavaScript1.1 作为提案被提交到了欧洲计算机制造商(ECMA)。它们承担了“标准化一门通用，跨平台，厂商中立的脚本语言的语法和语义”的任务。最终在他们的努力下ECMA-262，也就是ECMAScript这个新的脚本语言标准诞生了。至此，各家浏览器均已ECMAScript作为自己的Js实现的依据。



### JS的实现

虽然JS和ECMAScript基本上时同义词，但JS远远不限于ECMA-262所定义的那样，完整的js包含一下部分

- 核心：ECMAScript
- 文档对象模型：DOM（Document Object Model）
- 浏览器对象模型：BOM（Browser Object Model）



#### ECMAScript

ECMAScript即ECMA-262定义的语言，ECMA-262将这门语言作为一个基准来定义，以便在它至上再构建更稳健的脚本语言。Web浏览器只是ECMAScript实现可能存在的宿主环境，宿主环境提供了ECMAScript的基准实现和与环境自身交互的必须扩展，扩展（比如DOM）使用ECMScript核心类型和语法，提供特定于环境的额外功能。ECMAScript并不是仅仅局限在Web浏览器，其他宿主环境还有服务器端js平台node.js。

> ECMAScript定义的规范

<div >
    <ul style="display:flex">
    <li>语法</li>
    <li style="margin-left:30px;">类型</li>
    <li style="margin-left:30px;">语句</li>
    <li style="margin-left:30px;">关键字</li>
    <li style="margin-left:30px;">保留字</li>
    <li style="margin-left:30px;">操作符</li>
    <li style="margin-left:30px;">全局对象</li>
    </ul>
</div>

> ECMAScript版本

- ECMAScript1：与网景公司的JavaScript1.1相差不大，删除了浏览器特定代码，支持Unicode标准，对象与平台无关，外加了少量修改
- ECMAScript2：做了一些编校工作，更严格符合ISO/IEC-16262的要求，为增加改变其他特性
- ECMAScript3：真正对标准进行了更新，更新了字符串处理，错误定义和数值输出，增加了正则表达式、新的控制语句、try/catch异常处理的支出，更好的支持标准国际化
- ECMAScript4：对这门语言一次彻底的修订，包含了强类型变量、新语句和数据结构、真正的类和经典的继承，以及操作数据的新手段。ECMAScript4相比3相当于是完全定义了一门新的语言
- ECMAScript3.1（5）：有人认为ECMAScript4对于这门语言跳跃太大，因此提交了一份改动较小的方案，新增了接卸和序列化JSON数据的JSON对象、方便继承和高级属性定义的方法，以及新的严格模式。最终该份方案称为ECMAScript5
- ECMAScript6：这个规范称为有史以来最重要的增强，它支持了类、模块、迭代器、生成器、箭头函数、期约、反射、代理和众多新的数据类型。
- ECMAScript7：实现了少量的语法层面的增强
- ECMAScript8：增加了异步函数以及一些字符填充方法，另外明确支持了对象字面量最后的逗号
- ECMAScript9：修订了异步迭代、剩余和扩展属性、一组新的正则表达式特性、promise finally()、以及模板字面量。



#### DOM

文档对象模型（Document Object Model）是一个应用编程接口，用于在HTML中使用扩展的XML。DOM将整个页面抽象为一组分层节点。HTML或XML页面的每个组成部分都是一种节点包含不同的数据。DOM通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容和结构。为了保持Web跨平台本性，防止网景和微软各行其是导致Web分裂，W3C开始制定了DOM的标准。

> DOM的版本

- DOM Level 1：有DOM Core和DOM HTML组成，前者提供了XML文档映射，后者扩展了前者提供了HTML的对象和方法
- DOM Level 2：添加了新的接口，DOM视图（描述追踪文档不同视图的接口），DOM事件（描述事件及其事件处理接口），DOM样式（描述处理元素CSS样式的接口），DOM遍历和范围（描述了遍历和操作DOM树的接口）
- DOM Level 3：增加了加载、保存和验证文档的方法，DOM Core 经过扩展支持了所有XML1.0特性。

[^注]: 目前W3C不在按照Level来维护DOM了，而是作为DOM Living Standard来维护，其快照称为DOM4

> 其他DOM

除了DOM Core 和 DOM HTML接口，有些其他语言也发布了自己的DOM标准。下列语言是基于XML的，每一种都增加了该语言的DOM方法和接口：

- SVG：可伸缩矢量图
- MathML：数学标记语言
- SMIL：同步多媒体集成语言



#### BOM

浏览器对象模型（Browser Object Model），用于支持访问和操作浏览器的窗口，他是唯一没有相关标准的JS实现。H5改变了这个局面，这个版本的HTML以正式规范的形式涵盖了尽可能的BOM特性。BOM主要针对浏览器窗口和子窗体（frame），不过人们通常会把任何特定于浏览器的扩展都归在BOM的范畴内。

- 弹出新浏览器窗口的能力
- 移动、缩放和关闭浏览器窗口的能力
- navigator对象，提供关于浏览器的详尽信息
- location对象，提供浏览器加载页面的详细信息



### HTML引入JS方式

```html
/*引入外部文件*/
<script defer async charset="utf-8" crossorigin="anonymous"  src="test.js" type="text/javascript"></script>
/*嵌入行内js代码*/
<script>
    function sayhi(){
        console.info("hi");
    }
</script>
```





### JS语言基础



#### 语法

> ECMAScript语法很大程度上借鉴了C语言和类C语言，它具有一下特点：

- 区分大小写：ECMAScript中的一切都区分大小写，无论变量、函数、操作符。
- 标识符：变量、函数、属性等参数名第一个字符必须是字母，剩下字符可以字母、数字、下划线和美元符号
- 注解：//双斜杠为单行注解，/**/此为多行注解
- 语句：语句以推荐以分号结尾（不是必须的）

#### 关键字

> 关键字有特殊用于，不用用作标识符和属性名等

| break    | do       | in         | typeof  |
| -------- | -------- | ---------- | ------- |
| case     | else     | instanceof | var     |
| catch    | export   | new        | void    |
| class    | extends  | return     | while   |
| const    | finally  | super      | with    |
| continue | for      | switch     | yield   |
| debugger | function | this       | default |
| if       | throw    | delete     | import  |
| try      |          |            |         |

#### 变量

> es变量是松散类型的，它可以存放任何类型的数据。其中有3个关键字可以声明变量：var、let、const。var可以在任意版本使用，let和const只能在es6使用

##### var关键字

> 使用var定义变量

```js
var message;  //不初始化变量会保存一个undefined特殊值
var test="h2"; //声明并初始化变量
test=1000;     //不仅可以改变变量的值，也可以改变变量的类型，但不推荐这样做
var found=falase,age="12"; //定义多个var变量
```

> var的作用域：使用var定义变量会成为函数的局部变量，在函数退出时该变量会被销毁

```js
function test(){
   var message="hi";
}
console.info(message)  //出错
```

> var声明提升：使用var定义变量时，这个变量的声明将会自动提升到函数作用域的顶部

```js
function test(){
   //var message;    因为自动提升声明，因此就好像在开头定义了message变量一样
   console.info(message);//这里不会报错，输出undefined
   var message="test"
}

function test2(){
    //由于var声明自动提升的原因，因此反复定义同一变量也没有问题
    var message='1';
    var message='2';
    var message='3';
}
```

> var全局变量：当使用var在全局作用域声明变量时会成为window对象的属性

```html
<script>
    var age=12;
    console.info(window.age);
</script>
<script>
    var age=12;
    //存在于全局作用域仍然会声明提升，这里的age与上面的age是同一个变量
</script>
```

> for循环中的var

```js
for(var i=0;i<5;i++)
{
}
console.info(i); //声明提前，这是输出5
for(var i=0;i<5;i++)
{
    setTimeout(()=>console.log(i),0)
}
//输出 5 5 5 5 5  之所以出现这种情况，在退出循环是i=5，之后执行超时逻辑所有的i都是同一个变量
```



##### let关键字

> 使用let定义变量，与var一致

```js
let message;  //不初始化变量会保存一个undefined特殊值
let test="h2"; //声明并初始化变量
test=1000;     //不仅可以改变变量的值，也可以改变变量的类型，但不推荐这样做
let found=falase,age="12"; //定义多个let变量
```

> let的作用域，不同于var，let的作用范围是块作用域，块作用域是函数作用域的子集，因此它比var的作用范围小

```js
function test(){
   // var sayhello;
   if(true)
   {
      var sayhello="hello"  
      let sayhi="hi";
   }
   console.info(sayhi) //let的作用域仅在if块中，因此报错，ReferenceError,sayhi没有定义
   console.info(sayhello) //因为var声明自动提升，因此在if块中的var变量会提升到函数作用域顶部，这里输出“hello”
}

function test(){
    let a="123";
    if(a=="123"){
         let a="456";
         console.info(a);//这里并不会报错，因为js会记录变量所在的块作用域，因此嵌套使用相同变量不会报错，输出“456”
     }
    console.info(a)//输出 123
}

function test(){
    let a="123";
    if(a=="123"){
        a="456";
        console.info(a) //这里输出456
    }
    console.info(a)//这里也输出456，与上面不同，这里是使用了一个let变量
}
```

> let并不会声明提升

```js
function test(){
    let ab;
    let ab="123"; //由于没有声明提升，这样重复定义变量会报错
}
function test2(){
    console.info(ab);//由于没有声明提升，这里会报错，这种在声明前调用let变量的行为被称为暂时性死区，在此阶段引用未声明的let变量都会触发ReferenceError错误
    let ab="123";
}
```

> let不会成为全局变量：当使用let在全局作用域中声明变量不会成为window对象的属性，不过let声明仍然在全局作用域中发生，并在页面声明周期内存续

```html
<script>
    let age=12;
    console.info(window.age)//报错
    console.info(age) //输出12
</script>
<script>
    let age=12; //报错，因为age已经声明
</script>
```

> 不要尝试使用if或catch/try来进行声明检测，因为let是块作用域

```html
<script>
    if(typeof age==='undefined'){
        let age;
    }
    age=12;//报错，age只在if块内有效
    
    try{
        console.info(age);
    }
    catch(error)
    {
      let age
    }
    age=13;//报错，age仅在catch块内有效
</script>
```

> for循环中的let，由于let作用域在块中，因此不会出现像var的情况

```js
for(let i=0;i<5;i++)
{

}
console.info(i) //报错ReferenceError，i没有定义
for(let i=0;i<5;i++)
{
    setTimeout(()=>console.log(i))
}
//这里输出0 1 2 3 4，因为let作用域在for循环内，每次循环都是新的变量，因此没有出现var的情况
```

##### const关键字

> 使用const声明变量与let差不多，不过const声明变量必须初始化，且不可修改变量否则报错

```js
const a;//报错,没有初始化
const b=1;
b=2;//报错,不允许修改值
const a=1;
const a=2; //报错，同样没有声明提前，重复定义变量报错
```

> const的作用域：const的作用域与let相同，都是是块作用域，块作用域是函数作用域的子集，因此它们比var的作用范围小

```js
function test(){
   if(true)
   {
      const sayhi="hi";
   }
   console.info(sayhi) //const的作用域仅在if块中，因此报错，ReferenceError,sayhi没有定义
}
```

> const引用对象时，可以修改对象内部内容

```js
const a={
  b:12,
  c:34
}
a.b=14;//不报错
```

> for循环中的const

```js
for(const i=0;i<5;i++)//报错，不允许修改const
{
    console.info(i) 
}

for(const value of [1,2,3,4,5])//允许，
{
    console.info(value)
}
```



### JS兼容

浏览器对ECMAScript版本的支持情况，一些浏览器对JS不同的表现，以及特定浏览器不支持相关语法的处理办法

### JS优化
