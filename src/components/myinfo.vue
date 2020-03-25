<template>
<div>
    <div class="myinfo">
        <img alt="" src="../../static/img/info01.jpg"/>
         <div class="myinco">
             <el-tooltip  class="item"  content="Wechat" placement="top" >
                <a  href="/static/img/wechat.jpg" target="_blank" ><i class="wechat">
                 <svg class="icon" aria-hidden="true" style="color:white" width="200%">
                  <use xlink:href="#icon-weixin2"></use>
                </svg>
                </i></a>
             </el-tooltip>
             <el-tooltip  class="item"  content="QQ" placement="top" >
                <a  href="/static/img/qq.jpg" target="_blank" ><i class="QQ">
                 <svg class="icon" aria-hidden="true" style="color:white" width="200%">
                  <use xlink:href="#icon-qq1"></use>
                </svg>
                </i></a>
             </el-tooltip>
             <el-tooltip  class="item"  content="WeiBo" placement="top" >
                <a  href="https://weibo.com/u/5488919907" target="_blank"><i class="Weibo">
                 <svg class="icon" aria-hidden="true" style="color:white" width="200%">
                  <use xlink:href="#icon-weibo"></use>
                </svg>
                </i></a>
             </el-tooltip>
             <el-tooltip  class="item"  content="CSDN" placement="top" >
                <a  href="http//:www.baidu.com" target="_blank" ><i class="csdn">C
                </i></a>
             </el-tooltip>
         </div>
          <div class="myincotwo">
             <el-tooltip  class="item"  content="GitHub" placement="top" >
                <a  href="http//:www.baidu.com" target="_blank" ><i class="github">
                 <svg class="icon" aria-hidden="true" style="color:white" width="200%">
                  <use xlink:href="#icon-github"></use>
                </svg>
                </i></a>
             </el-tooltip>
             <el-tooltip  class="item"  content="jianli" placement="top" >
                <a  href="http//:www.baidu.com" target="_blank" ><i class="jianli">
                 <svg class="icon" aria-hidden="true" style="color:white" width="200%">
                  <use xlink:href="#icon-jianli"></use>
                </svg>
                </i></a>
             </el-tooltip>
             <el-tooltip  class="item"  content="More" placement="top" >
                <a  href="" target="_blank" ><i class="more">
                 <svg class="icon" aria-hidden="true" style="color:white" width="200%">
                  <use xlink:href="#icon-more"></use>
                </svg>
                </i></a>
             </el-tooltip>
         </div>
    </div>
    <div class="likeme">
    </div>
</div>
</template>

<style>
.myinfo{
    width:30%;
    height: 350px;
    margin:auto;
    position: relative;
    top:400px;
    left:-500px;
    padding: 40px 0;
    font-size: 16px;
    opacity: 0.98;
    background: rgba(240, 239, 239, 0.822);
    border-radius:5px;
    z-index: 1;
}
.myinfo:hover{
    transform: translate(0,-2px);
    box-shadow:0 15px 30px rgba(0,0,0,.1);
}

.myinfo img{
    width:95%;
    height:250px;
    position: absolute;
    top:20px;
    left:10px;
}

.likeme{
    width:30%;
    height: 150px;
    margin:auto;
    position: relative;
    top:440px;
    left:-500px;
    padding: 40px 0;
    font-size: 16px;
    opacity: 0.98;
    background: rgba(240, 239, 239, 0.822);
    border-radius:5px;
    z-index: 1;
}
.likeme:hover{
    transform: translate(0,-2px);
    box-shadow:0 15px 30px rgba(0,0,0,.1);
}


.myinco a{
   position: relative;
   top: 280px;
   left:-20px;
   display: inline-block;
}
.myinco a i{
    display: inline-block;
    font-size: 18px;
    width:42px;
    height:42px;
    line-height: 42px;
    border-radius: 42px;
    color:rgba(0,0,0,0.5);
    background: rgba(0,0,0,0.1);
    transition: all 0.3s ease-in-out;
    font-style: normal;
    margin:0 3.2px;
}
.myinco a i:hover{
    background: rgb(44, 204, 244);
    color:hotpink;

}
.myincotwo a{
   position: relative;
   top: 290px;
   left:-20px;
   display: inline-block;
}
.myincotwo a i{
    display: inline-block;
    font-size: 18px;
    width:42px;
    height:42px;
    line-height: 42px;
    border-radius: 42px;
    color:rgba(0,0,0,0.5);
    background: rgba(0,0,0,0.1);
    transition: all 0.3s ease-in-out;
    font-style: normal;
    margin:0 3.2px;
}
.myincotwo a i:hover{
    background: rgb(44, 204, 244);
    color:hotpink;

}
</style>