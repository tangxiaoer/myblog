<template>
    <div class="home">
        <noah-header></noah-header>
        <noah-toper></noah-toper>
        <noah-info></noah-info>
        <noah-main></noah-main>
        <!-- <lazy-render :time="300">
        <noah-footer></noah-footer>
        </lazy-render> -->
        <iframe src="https://zhanyuzhang.github.io/lovely-cat/cat.html" class="cat" frameborder="0" @click="goTop()"></iframe>
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
         },
         goTop(){
             alert("11111111")
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
.cat{
    position: fixed;
    top:600px;
    left:-200px;
}
</style>