<template>
<div @click="hidesharelist">
    <div class="title">
    </div>
    <div class="brother">
    </div>
   <div class="textbox"  v-for="(item,index) in list.slice(0,count)" :key="'article'+index" :style="{top:`${450+index*12}px`}" >
       <div class="label">
           {{item.type}}
       </div>
       <div class="timeLabel">
           {{item.createtime.slice(0,10)}}
       </div>
       <div class="shadow">
       </div>
       <h1>{{item.title}}</h1>
       <div class="abstract">
           {{item.abstract}}
       </div>
       <div class="bar" @click="settingEvent($event)">
            <svg class="inco" aria-hidden="true">
                <use xlink:href="#icon-xiaoxi"></use>
            </svg>
              <P class="comment">122条评论</p>
            <svg class="inco" aria-hidden="true" style="left:360px;top:188px">
            <use xlink:href="#icon-shoucang"></use>save
            </svg>
              <p class="comment" style="left:390px">收藏{{item.save}}</p>
            <svg class="inco" aria-hidden="true" style="left:460px;top:188px;width:1.7em;height:1.7em;">
              <use xlink:href="#icon-taoxin"></use>
            </svg>
            <p class="comment" style="left:490px">喜欢{{item.clike}}</p>
            <svg class="inco" aria-hidden="true" style="left:560px;top:188px;" @click="sharelist">
              <use xlink:href="#icon-fenxiang"></use>
            </svg>
            <p class="comment" style="left:590px"  >分享</p>        
       </div>
        <a class="read" :href="'#/DetailShare?aid='+item.id" target="_blank">阅读全文</a>

        
   </div>
   <div class="more" :style="{top:`${520+index1*60}px`}" v-if="count<list.length" @click="loadMore">
       点击加载更多
   </div>
   <div class="nomore" :style="{top:`${500+index1*50}px`}" v-else>没有更多了</div>
   <div class="sharefriend" :style="{left: tranLeft, top: tranTop}" v-if="friendflag"  @click="settingEvent($event)">
   </div>
</div>
</template>


<script>
import axios from 'axios'
import qs from 'qs'
export default {
    data(){
        return{
            list:[],
            count:5,
            res:null,
            title:'',
            liked:'',
            text:'',
            friendflag:false,
            tranLeft:'670px',
            tranTop:'1070px',
            index1:0
        }
    },
    created(){
        this.loadData();//需要触发的函数
    },
    methods:{
        loadMore:function(){
            this.count+=5;
            this.index1+=1;
        },
        loadData()
        {            
            //get 请求接口            
            var _this=this;           
             _this.$axios.post('http://175.24.9.165:8001/get_article',{       
                 classid:"all"      
             })           
             .then(function (response) {
                // _this.title=response.data[0]['title']
                // _this.liked=response.data[0]['clike']
                // _this.text=response.data[0]['text']
                _this.list=response.data
             })            
            .catch(error=>{                
                console.log(error)             
            })          
        },
        sharelist(e){
            this.tranLeft = (e.pageX-75) + 'px'
			this.tranTop = (e.pageY+20) + 'px'
            this.$set(this, 'friendflag', !this.friendflag)
        },
        hidesharelist(){
               this.$set(this, 'friendflag', false);
               //全局区域内点击时showSettingCon均为false
           },
        settingEvent(event){
               event.stopPropagation(); //此区域不受上面方法的影响
           },
        touchstart(e) {
            this.tranLeft = (e.pageX-75) + 'px'
			this.tranTop = (e.pageY+20) + 'px'
        },
        readAll(){
            alert("1111111111")
        }

    }
}
</script>

<style>

.title{
    width:55%;
    height: 30px;
    margin:auto;
    position: relative;
    top:410px;
    left:-209px;
    padding: 40px 0;
    font-size: 16px;
    opacity: 0.98;
    background: rgba(255, 255, 255, 0.8);
    border-radius:5px;
    z-index: 1;
}

.textbox{
    width:55%;
    height: 150px;
    margin:auto;
    position: relative;
    top:500px;
    left:-209px;
    padding: 40px 0;
    font-size: 15px;
    opacity: 0.98;
    background: rgba(255, 255, 255, 0.8);
    border-radius:5px;
    z-index: 1;

}
.textbox:hover{
    background: rgb(235, 233, 233);
}
.textbox h1{
    position: absolute;
    left:5px;
    top:20px;
    font-size: 18px;
    font-weight: 500;
    color:rgb(4, 177, 4);
}
.abstract{
    position: absolute;
    left:200px;
    top:70px;
    font-size: 14px;
    text-align: left;
    color:black;
}
.line{
    position: relative;
    margin-top:185px;
    background-color:rgb(214, 212, 212);
    height:1px;
}
.label{
    border-color: #97dffd;
    -webkit-box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 1px 5px 0px rgba(0,0,0,0.12);
    background-color:red;
    margin:5px 0 15px 2px;
    font-size:14px;
    border-radius: 0 4px 4px 0;
    padding:7px 11.2px 7px 32px;
    display: inline-block;
    color:#fff;
    position: absolute;
    top:-10px;
    left:-20px;
    padding-left:18px!important;
}
.timeLabel{
    border-color: #97dffd;
    -webkit-box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 1px 5px 0px rgba(0,0,0,0.12);
    background-color:#97dffd;
    margin:5px 0 15px 2px;
    font-size:14px;
    border-radius: 0 4px 4px 0;
    padding:7px 11.2px 7px 32px;
    display: inline-block;
    color:#fff;
    position: absolute;
    top:-10px;
    left:700px;
    padding-left:18px!important;
}
.read{
    position: absolute;
    top:190px;
    left:700px;
}
.shadow{
    border-style: solid;
    border-width: 0px 0px 18px 18px;
    border-color: transparent transparent rgb(8, 8, 8) transparent;
    width: 0px;
    height: 0px;
    position: absolute;
    left:-18px;
    top:28px;
    -webkit-transform: rotate(-90deg);
}
.more{
    width:55%;
    background-color: rgb(0, 238, 255);
    border-color:#478eea;
    border-radius: 3px;
    position: relative;
    color:#fff;
    margin:auto;
    bottom:-750px;
    left:-209px;
    height:30px;
    -webkit-user-select:none;
    z-index: 99999;
}
.more:hover{
    background-color: #478eea;
    cursor:pointer;
}
.nomore{
    width:55%;
    background-color: rgb(0, 238, 255);
    border-color:#478eea;
    border-radius: 3px;
    position: relative;
    color:rgb(250, 6, 6);
    margin:auto;
    top:450px;
    left:-210px;
    height:30px;
    -webkit-user-select:none;
    z-index: 99999;
}
.inco {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  position: absolute;
  top:190px;
  left:220px;
  color:rgb(179, 179, 179);
}
.inco:hover {
  cursor: pointer;
  color:red;
}
.comment:hover{
    cursor: pointer;
    color:lightgreen;
}
.comment{
    position: absolute;
    top:175px;
    left:250px;
    color:rgb(179, 179, 179);
}
.sharefriend{
    width:10%;
    height: 0px;
    margin:auto;
    position: absolute;

    padding: 40px 0;
    font-size: 16px;
    opacity: 0.98;
    background: rgba(245, 49, 49, 0.8);
    border-radius:5px;
    z-index: 999999;
}
.readAll{
    border-color: #97dffd;
    -webkit-box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 1px 5px 0px rgba(0,0,0,0.12);
    background-color:#97dffd;
    margin:5px 0 15px 2px;
    font-size:14px;
    border-radius: 0 4px 4px 0;
    padding:7px 11.2px 7px 32px;
    display: inline-block;
    color:#fff;
    position: absolute;
    top:190px;
    left:650px;
    padding-left:18px!important;
}

</style>