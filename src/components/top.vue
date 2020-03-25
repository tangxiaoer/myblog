<template>
    <div>
        <div class="bgsrc" :style="{backgroundImage:`url(${imgUrl})`}"></div>
        <div class="scene">
            <div>
                <span class="" id="noah">Hello World</span>
            </div>
        </div>
        <div class="information">
            <a href='#/aboutme'>
            <img alt="" src="../../static/img/aboutme.jpg"/>
            </a>
            <h2 class="description">
                <a href="#/Aboutme">From Zero To Hero</a>
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgUrl:require('../../static/img/bg01.jpg'),    
            aboutmeUrl:require('../../static/img/aboutme.jpg')
        }
    },
    methods:{
        login(){
            this.$router.push({ path:'/login'  });
        }
    },
    components: { //定义组件
    }
}
</script>

<style>
.bgsrc{
    height: 650px;
    position: absolute;
    top:0px;
    left:0px;
    width: 100%;
    background-position: center 50%;
    background-repeat:  no-repeat;
    background-size: cover;
}
.scene{
    width:100%;
    text-align: center;
    font-size: 100px;
    font-weight: 200;
    color:rgb(155, 245, 38);
    position: absolute;
    left:0px;
    top:160px;
    font-family:inherit;
    text-shadow: 0px 2px 2px #47456d;
}
.scene:hover{
    font-size:250px;
    color:violet;
}
.information{
    text-align: center;
    width:40%;
    height: 200px;
    margin:auto;
    position: relative;
    top:350px;
    padding: 40px 0;
    font-size: 16px;
    opacity: 0.98;
    background: rgba(230, 244, 249, 0.8);
    border-radius:5px;
    z-index: 1;
}
.information h2{
    margin-top:60px;
    font-size:18px;
    font-weight: 700;
}
.information h2 a{
    background: linear-gradient(to right, #DF2050, #48456D);
    -webkit-background-clip: text;
    color:transparent;
}
.information img{
    width:100px;
    height:100px;
    border-radius: 100%;
    -webkit-transition: all .4s ease-in-out;
    -o-object-fit: cover;
    object-fit: cover;
}
.information img:hover {
	transform: rotate(360deg);
	-webkit-transform: rotate(360deg);
}

</style>