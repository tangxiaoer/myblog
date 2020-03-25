<template>
    <div>
        <noah-header></noah-header>
        <noah-toper></noah-toper>
    </div>
</template>

<script>
import header from '../components/header.vue'
import toper from '../components/top.vue'
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
            'noah-toper':toper
    }
}
</script>