<template>
    <div class="aboutme">
       <noah-header></noah-header>
       <noah-toper></noah-toper>
       <noah-info></noah-info>

    </div>
</template>

<script>
import header from '../components/header.vue'
import toper from '../components/top.vue'
import rightlist from '../components/rightlist.vue'
export default {
    data(){
        return{

        }
    },
    mounted:function(){
        this.load();
    },
    components: { //定义组件
            'noah-header':header,
            'noah-toper':toper,
            'noah-info':rightlist
    },
    methods:{
        load(){
            window.scrollTo(0,800);
        }
    }
}
</script>

<style>
</style>