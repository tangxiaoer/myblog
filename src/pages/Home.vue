<template>
    <div class="home">
        <noah-header></noah-header>
        <noah-toper></noah-toper>
        <noah-info></noah-info>
        <noah-main></noah-main>
        <lazy-render :time="300">
        <noah-footer></noah-footer>
        </lazy-render>
    </div>
</template>

<script>
import header from '../components/header.vue'
import toper from '../components/top.vue'
import main from '../components/preview.vue'
import rightlist from '../components/rightlist.vue'
import footer from '../components/foter.vue'
export default {
    data(){
        return{
  
        }
    },
    mounted(){
         this.typing();
    },
    methods:{
        login(){
            this.$router.push({ path:'/login'  });
        },
         typing() {
                    if (this.i <= this.str.length) {
                        this.str2 = this.str.slice(0, this.i++) + '_';
                        this.timer = setTimeout(() => {
                            this.typing();
                        }, 200);
                    } else {
                        clearTimeout(this.timer)
                    }
         }
    },
    components: { //定义组件
            'noah-header':header,
            'noah-toper':toper,
            'noah-main':main,
            'noah-info':rightlist,
            'noah-footer':footer
    }
}
</script>

<style>
</style>