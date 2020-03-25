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
import myinfo from '../components/myinfo.vue'
export default {
    data(){
        return{

        }
    },
    components: { //定义组件
            'noah-header':header,
            'noah-toper':toper,
            'noah-info':myinfo
    }
}
</script>

<style>
</style>