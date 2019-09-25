# Vue含表情评论回复组件

## 一、评论回复组件效果

### 使用vue开发一款精美实用的评论回复组件，并包含emoji表情包，整体效果如下

![](http://www.dreamland.wang/images/image/20190925/20190925155034_470.png)

### 文本框获取焦点时弹出Emoji表情按钮、发送和取消按钮，如下图

![](http://www.dreamland.wang/images/image/20190925/20190925155151_897.png)


### 点击Emoji表情即可弹出表情包，如下图

![](http://www.dreamland.wang/images/image/20190925/20190925160335_324.png)

## 二、使用

### 1、使用下面命令下载hbl-comment组件

	npm i hbl-comment

### 2、下载完成之后在项目中引入

	import comment from 'hbl-comment'
	components:{
      comment
    },

### 3、使用

	 <comment></comment>

### 4、如果没有下载element-ui的使用下面命令进行下载

	npm i element-ui -S

### 5、下载完成后在main.js中引入

	import ElementUI from 'element-ui';
	import 'element-ui/lib/theme-chalk/index.css'
	Vue.use(ElementUI);

## 三、属性及事件


### 1、props属性

   | 名称        | 类型    |  说明   |  默认值 |
   | --------    | --------  | --------  | --------  |
   | avatar        |String      |   头像    | 空
   | placeholder  | String      |  文本框提示内容    | 在此输入评论内容...
   | minRows        | Number     |   文本框最小行数    | 4
   | maxRows        | Number     |   文本框最大行数    | 8
   | commentNum        | Number     |   评论条数    | 2
   | authorId        | Number     |   当前登录用户id   | 1
   | label        | String     |   标签名   | 作者
   | commentWidth        | String     |   文本框宽度   | 80%
   | commentList        |  Array     |   评论列表   | 包含内容较多，此处略
   
评论列表commentList 包含多个评论comment，关于comment相关字段如下：

### 2、comment包含字段

   | 名称        | 类型    |  说明   | 
   | --------    | --------  | --------  | 
   | id        |Number      |   评论id    | 
   | commentUser  | Object      |  评论用户    | 
   | targetUser        | Object     |   被评论用户    | 
   | content        | String     |   评论内容    | 
   | createDate        | String     |   评论时间    | 
   | childrenList        | Array     |   子评论列表   | 

### 3、用户包含字段

   | 名称        | 类型    |  说明   | 
   | --------    | --------  | --------  | 
   | id        |Number      |   用户id    | 
   | nickName  | String      |  用户昵称    | 
   | avatar        | String     |   用户头像    | 

### 4、事件Events

   | 名称       |  说明   |  参数
   | --------    | --------  | -------- 
   | doSend          |   初始文本框发送事件    | 评论内容
   | doChidSend   |  评论列表中文本框发送事件    |  评论内容,被评论用户id,父级评论id

