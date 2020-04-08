<template>
    <div class="home">
        <noah-header></noah-header>
        <noah-toper></noah-toper>
        <noah-info></noah-info>

        <div>
             <div class="title">
             </div>
             <div class="brother">
             </div>
            <div class="textbox" v-for="(item,index) in list.slice(0,count)" :key="'article'+index" :style="{top:`${450+index*12}px`}">
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
        <a class="read" href="javascript:void(0);" @click="readAll">阅读全文</a>
            </div>
            <div class="more" :style="{top:`${520+index1*60}px`}" v-if="count<list.length" @click="loadMore">
                点击加载更多
            </div>
            <div class="nomore" :style="{top:`${500+index1*50}px`}" v-else>没有更多了</div>

   
         </div>

        <lazy-render :time="300">
        <!-- <noah-footer></noah-footer> -->
        </lazy-render>
    </div>
</template>

<script>
import header from '../components/header.vue'
import toper from '../components/top.vue'

import rightlist from '../components/rightlist.vue'
import footer from '../components/foter.vue'
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
            id:'',
            index1:0
        }
    },
    mounted:function(){
        this.loadData();//需要触发的函数
    },
    watch:{
        $route(){
        this.id = this.$route.query.classId;
        this.loadData();
        this.index1=0;
        }
    },
    methods:{
        login(){
            this.$router.push({ path:'/login'  });
        },
        
        loadMore:function(){
            this.count+=5;
            this.index1+=1;
        },
        loadData()
        {            
            //get 请求接口          
            var _this=this;   
            _this.id = this.$route.query.classId          
             _this.$axios.post('http://175.24.9.165:8001/get_article',{       
                 classid:_this.id      
             })           
             .then(function (response) {
                _this.list=response.data
             })            
            .catch(error=>{                
                console.log(error)             
            })          
        } ,
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
    },
    components: { //定义组件
            'noah-header':header,
            'noah-toper':toper,
            'noah-info':rightlist,
            'noah-footer':footer
    }
}
</script>

<style>
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
</style>