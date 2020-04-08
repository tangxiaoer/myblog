<template>
    <div class="home">
        <noah-header></noah-header>
        <noah-toper></noah-toper>
        <noah-info></noah-info>
        <div>
             <div class="brother">
             </div>
            <div class="rewardbox">
                <h1>赞赏</h1>
                <img src="../../static/img/reward01.jpg">
                <hr class="one">
                <h2>赞赏方式:</h2>
                <div>
                     <div class="pay">
                        <img  src="../../static/img/rewardpay.jpg">
                     </div>
                </div>
                <hr class="two">
                <p>赞赏记录:</p>
            </div>
         </div>
        <!-- <noah-footer></noah-footer> -->
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
.rewardbox{
    width:55%;
    height: 900px;
    margin:auto;
    position: relative;
    top:412px;
    left:-209px;
    padding: 40px 0;
    font-size: 15px;
    opacity: 0.98;
    background: rgba(255, 255, 255, 0.8);
    border-radius:5px;
    z-index: 1;
}
.rewardbox h1{
    position: relative;
    top:-40px;
}
.one{
    position: relative;
    top:400px;
    left:0px;
    width:100%;
}
.two{
    position: relative;
    top:596px;
    left:0px;
    width:100%;
}
.rewardbox p{
    position: absolute;
    top:700px;
    left: 10px;
    font-size: 23px;
    font-weight: 1000;
}
.rewardbox img{
    width:40%;
    position: absolute;
    left:0px;
}
.rewardbox h2{
    position: absolute;
    left:10px;
    top:500px;
}
.pay img{
    width:35%;
    position: absolute;
    top:550px;
    left:250px;
}


</style>