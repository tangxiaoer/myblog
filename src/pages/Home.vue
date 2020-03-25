<template>
    <div>
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
import leftlist from '../components/leftlist.vue'
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
            'noah-info':leftlist
    }
}
</script>