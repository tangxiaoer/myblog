<template>
    <div class="aboutme">
       <noah-header></noah-header>
       <noah-toper></noah-toper>
       <noah-info></noah-info>
        <noah-main></noah-main>
        <noah-footer></noah-footer>
    </div>
</template>

<script>
import header from '../components/header.vue'
import toper from '../components/top.vue'
import rightlist from '../components/rightlist.vue'
import footer from '../components/foter.vue'
import main from '../components/preview.vue'
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
            'noah-info':rightlist,
            'noah-main':main,
            'noah-footer':footer
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