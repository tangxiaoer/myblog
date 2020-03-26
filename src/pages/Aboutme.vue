<template>
    <div class="aboutme">
       <noah-header></noah-header>
       <noah-toper></noah-toper>
       <noah-info></noah-info>
       <noah-footer></noah-footer>
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