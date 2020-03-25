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
import leftlist from '../components/leftlist.vue'
export default {
    data(){
        return{

        }
    },
    components: { //定义组件
            'noah-header':header,
            'noah-toper':toper,
            'noah-info':leftlist
    }
}
</script>

<style>
</style>