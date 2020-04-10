<template>
    <div class="home">
        <noah-header></noah-header>
        <noah-toper></noah-toper>
        <noah-info></noah-info>
        {{list[0]}}
        <iframe src="https://zhanyuzhang.github.io/lovely-cat/cat.html" class="cat" frameborder="0" @click="goTop()"></iframe>
    </div>
</template>

<script>
import header from '../components/header.vue'
import toper from '../components/top.vue'
import rightlist from '../components/rightlist.vue'
import footer from '../components/foter.vue'
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
            _this.$axios.post('http://175.24.9.165:8001/get_article',{
                classid:"all"  
            }).then(function (response){
                _this.list=response.data
                alert(_this.list[0].text)
            }).catch(error=>{
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
.cat{
    position: fixed;
    top:600px;
    left:-200px;
}
</style>