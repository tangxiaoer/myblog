<template>
<div>
    <div class="title">
    </div>
    <div class="brother">
    </div>
   <div class="textbox" v-for="(item,index) in list.slice(0,count)" :key="'article'+index">
   <div class="label">
       {{item.type}}
   </div>
   <div class="shadow">
   </div>
   <h1>{{item.title}}</h1>
   <div class="abstract">
       {{item.abstract}}
   </div>
    <hr class="line">
   </div>
   <div class="more" v-if="count<list.length" @click="loadMore">
       点击加载更多
   </div>
   <div class="nomore" v-else>没有更多了</div>

   
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
            text:''
        }
    },
    mounted:function(){
        this.loadData();//需要触发的函数
    },
    methods:{
        loadMore:function(){
            this.count+=5;
        },
        loadData()
        {            
            //get 请求接口            
            var _this=this;           
             _this.$axios.post('http://175.24.9.165:8001/get_article',{             
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
    top:450px;
    left:-209px;
    padding: 40px 0;
    font-size: 15px;
    opacity: 0.98;
    background: rgba(255, 255, 255, 0.8);
    border-radius:5px;
    z-index: 1;
}

.textbox h1{
    position: absolute;
    left:5px;
    top:20px;
    font-size: 18px;
}
.abstract{
    position: absolute;
    left:200px;
    top:70px;
    font-size: 14px;
    text-align: left;
}
.line{
    position: relative;
    margin-top:190px;
    background-color:rgb(214, 212, 212);
    height:1px;
}
.label{
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
    left:-20px;
    padding-left:18px!important;
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
    bottom:-450px;
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
    bottom:-450px;
    left:-209px;
    height:30px;
    -webkit-user-select:none;
    z-index: 99999;
}

</style>