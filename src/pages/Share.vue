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

        <lazy-render :time="300">
        <noah-footer></noah-footer>
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
            id:''
        }
    },
    mounted:function(){
        this.loadData();//需要触发的函数
    },
    watch:{
        $route(){
        this.id = this.$route.query.classId;
        this.loadData();
        }
    },
    methods:{
        login(){
            this.$router.push({ path:'/login'  });
        },
        
        loadMore:function(){
            this.count+=5;
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
</style>