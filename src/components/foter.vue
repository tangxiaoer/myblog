<template>
<div>
    <img class="foot" src="../../static/img/ft02.png">
    <div class="sss" :style="{top:`${450+index*12}px`}">
        <h1>渝ICP备20002556号-1</h1>
    </div>
</div>
</template>

<style>
.foot{
    position: relative;
    margin:auto;
    bottom: -105px;
    left:450px;
}
.sss{
    width: 100.7%;
    height:50px;
    background-color:rgba(230, 244, 249, 0.8);
    position: relative;
    margin:auto;
    top:100px;
    left:-10px;
}

</style>