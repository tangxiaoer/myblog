<template>
<div>
    <div class="title">
    </div>
    <div class="main">
        <el-col :span="24" class="s-item tcommonBox" v-for="(item,index) in list" :key="'article'+index">
            <header>
                <h1>
                    TEST THE MAIN PAGE
                </h1>
            </header>       
            <div class="viewdetail">
                <a class="tcolors-bg" :href="'#/DetailShare?aid='+item.id" target="_blank">
                    阅读全文>>
                </a>
            </div>
            <hr/>
        </el-col>
    </div>
</div>
</template>


<script>
export default {
    data(){
        return{
            list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        }
    }
}
</script>

<style>
.title{
    width:50%;
    height: 30px;
    margin:auto;
    position: relative;
    top:-250px;
    left:-170px;
    padding: 40px 0;
    font-size: 16px;
    opacity: 0.98;
    background: rgba(237, 240, 234, 0.822);
    border-radius:5px;
    z-index: 1;
}
.main{
    width:49.5%;
    height:auto;
    margin:auto;
    position: absolute;
    top:850px;
    left:215px;
    padding: 40px 0;
    font-size: 16px;
    opacity: 0.98;
    background: rgba(237, 240, 234, 0.822);
    border-radius:5px;
    z-index: 1;
    overflow:hidden;
    zoom:1;
}

</style>