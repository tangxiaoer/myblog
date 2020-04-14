<template>
    <div class="home">
        <noah-header></noah-header>
        <noah-toper></noah-toper>
        <noah-info></noah-info>
        <div class="title">
            <div class=subtitle>{{list[0].title}}</div>
            <div class="infocard" v-html="list[0].text" style="line-height:30px;"></div>
        </div>
        <iframe src="https://zhanyuzhang.github.io/lovely-cat/cat.html" class="cat" frameborder="0" @click="goTop()"></iframe>
        <noah-board class="test"></noah-board>
    </div>
</template>

<script>
import header from '../components/header.vue'
import toper from '../components/top.vue'
import rightlist from '../components/rightlist.vue'
import footer from '../components/foter.vue'
import board from '../components/board.vue'
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        this.loadData()
    },
    methods:{
        loadData(){
            var _this=this
            let id = this.$route.query.aid
            _this.$axios.post('http://175.24.9.165:8001/get_detail',{
                id:id 
            }).then(function (response){
                _this.list=response.data
            }).catch(error=>{
                console.log(error)
            })
        }
    },
    components: { //定义组件
            'noah-header':header,
            'noah-toper':toper,
            'noah-info':rightlist,
            'noah-footer':footer,
            'noah-board':board
    }
}
</script>

<style>
.cat{
    position: fixed;
    top:600px;
    left:-200px;

}
.maininfo{
    position: absolute;
    top:0px;
}
.title{
    width:55%;
    height: auto;
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
    text-align: left;
}
.subtitle{
    text-align: center;
    font-weight: 1000;
    font-size: 30px;
}
.infocard{
    margin-top:100px;
    margin-left:30px;
    margin-right: 30px;
}
.test{
    position: relative;
    top:50px;
}
</style>