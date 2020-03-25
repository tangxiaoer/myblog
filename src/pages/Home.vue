<template>
    <div class="home">
        <noah-header></noah-header>
        <noah-toper></noah-toper>
        <noah-info></noah-info>
        <noah-main></noah-main>
    </div>
</template>

<script>
import header from '../components/header.vue'
import toper from '../components/top.vue'
import main from '../components/preview.vue'
import rightlist from '../components/rightlist.vue'
export default {
    data(){
        return{

        }
    },
    methods:{
        login(){
            this.$router.push({ path:'/login'  });
        }
    },
    components: { //定义组件
            'noah-header':header,
            'noah-toper':toper,
            'noah-main':main,
            'noah-info':rightlist
    }
}
</script>

<style>
</style>