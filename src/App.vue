<template>
  <div id="app">
    <div>
      <comment @doSend="doSend($event)"  @doChidSend="doChidSend(arguments)" :commentList="commentList" :commentNum="commentNum" :label="label" :avatar="avatar" :placeholder="placeholder" :minRows="minRows" :maxRows="maxRows"></comment>
    </div>
  </div>
</template>

<script>
   import Comment from '@/components/Comment'; // 开发文件
export default {
  name: 'App',
  data(){
    return{
      label:"SVIP",
      placeholder:"说点什么吧",
      minRows:4,
      maxRows:4,
      commentNum:2,
      avatar:require('@/components/img/icon/avtar.png'),
      commentList:[
        {
              id:1,
              commentUser:{
                  id:1,
                  nickName:'花非花',
                  avatar:'http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50'
              },
              content:"<a style='text-decoration:none;color: #409eff ' href='https://blog.csdn.net/abcwanglinyong/'>我的CSDN博客地址</a>[害羞][害羞][害羞]<br/>"
              +"我的微信公众号：<br/>"
              +"<img src="+require('@/components/img/hbl.jpg')+">",
              createDate:'2019-9-23 17:36:02',
              childrenList:[
                {
                  id:2,
                  commentUser:{
                    id:2,
                    nickName:'坏菠萝',
                    avatar:''
                  },
                  targetUser:{
                    id:1,
                    nickName:'花非花',
                    avatar:'http://qzapp.qlogo.cn/qzapp/101483738/6637A2B6611592A44A7699D14E13F7F7/50'
                  },
                  content:'真的就很棒！很Nice!',
                  createDate:'2019-9-23 17:45:26'
                }

              ]
            },

      ]
    }
  },
   components: {
      Comment
    },
    methods:{
      doSend(content){
        console.log("初始发送按钮点击事件："+content);
      },
      doChidSend(args){
        console.log("评论区发送按钮点击事件：");
        console.log("content="+args[0]);
        console.log("targetUserId="+args[1]);
        console.log("父级评论id="+args[2]);
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
