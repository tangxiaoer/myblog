<template>
    <div>
        <div class="bgsrc" :style="{backgroundImage:`url(${dataList[0]})`}"></div>
        <div v-show="iscpp" class="cpp">
            <div v-html="cpp"></div>
        </div>
        <div class="scene">
            <div>
                <span class="" id="noah">{{title}}</span>
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
            aboutmeUrl:require('../../static/img/aboutme.jpg'),
            dataList: ['../../static/img/bg01.jpg', '../../static/img/bg02.jpg'],
            currentIndex: 0, // 默认显示图片
            timer: null, // 定时器
            iscpp:false,
            i:0,
            j:0,
            timer:0,
            timerj:0,
            cpp:"",
            str: '#include &lt;iostream&gt;<br/>using name space std;<br/><br/>void main(){<br/>&nbsp;&nbsp;&nbsp;cout&lt;&lt;"Hello World";<br/>}<br/>................................................................&gt;',
            title:'',
            str2:'Hello World'
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
            if(this.$route.path=="/")
            {
                    if (this.i <= this.str.length) {
                        this.iscpp=true;
                        this.cpp = this.str.slice(0, this.i++) + '_';
                        this.timer = setTimeout(() => {
                            this.typing();
                        }, 30);

                    }else if(this.j<=this.str2.length){
                        this.title=this.str2.slice(0,this.j++);
                        this.timerj=setTimeout(() => {
                            this.typing();
                        }, 50);
                    } 
                    else {
                        clearTimeout(this.timer);
                        this.iscpp=false;
                    }
            }else{
                this.title=this.str2;
            }
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
.cpp{
    text-align: left;
    width:25%;
    height: 200px;
    margin:auto;
    position: absolute;
    top:100px;
    padding: 40px 0;
    font-size: 16px;
    opacity: 0.98;
    background: rgba(13, 13, 14, 0.8);
    border-radius:5px;
    z-index: 1;
    color:red;
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