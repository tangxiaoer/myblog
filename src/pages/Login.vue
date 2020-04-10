<template>
<div class="login">
     <div class="bak">
            <vue-particles 
            color="#dedede"
            :particleOpacity="0.9"
            :particlesNumber="100"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push">
            </vue-particles>
      </div>
    <h1 class="loginTitle">
        {{msg1}}
    </h1>
    <h1 class="loginTitle2">
        {{msg2}}
    </h1>
    <div v-if="login==1"  class="loginBox">
        <div class="lr-title">
            <h1>{{title}}</h1>
            <p>
                <a href="" class="tcolors" @click.prevent="register" v-show="toreg">{{reginfo2}}</a>
                <a href="" class="tcolors" @click.prevent="tologin" v-show="tolog">{{reginfo2}}</a>
            </p>
        = </div> 
        <el-input v-model="username" v-show="isuser" placeholder="账号"></el-input>
        <el-input v-model="password" type="password" v-show="ispsw" placeholder="密码"></el-input>
        <el-input v-model="checkc" placeholder="验证码" class="checkco"></el-input>
        <svg class="iconF5" aria-hidden="true" @click="createCode">
            <use xlink:href="#icon-NMStubiao-"></use>
        </svg>
        <div class="checkimg"></div>
        <p class="showcode">{{checkCode}}</p>
        <p v-if="error" class="error">{{errorinfo}}</p>
        <p v-if="regis" class="error">{{errorinfo2}}</p>
        <p>
         <el-button @click="loadData" type="primary" style="width:100%; position: relative;" v-show="islog">登录</el-button>
        </p>
        <p>
         <el-button @click="registerData" type="primary" style="width:100%; position: relative;" v-show="isreg">注册</el-button>
        </p>
    </div>
   
</div>
</template>

<script type= "text/javascript">
import axios from 'axios'
import qs from 'qs'

export default {
    name:'login',
    data(){
        return{
            reginfo2:'注册',
            title:'登录',
            username:'',
            password:'',
            info: null,
            login:'1',
            msg1: 'Noah\'',
            msg2:'s Blog',
            error:false,
            isuser:true,
            ispsw:true,
            islog:true,
            isreg:false,
            toreg:true,
            tolog:false,
            regis:false,
            checkCode:'',
            checkc:'',
            errorinfo:'',
            errorinfo2:''

        }
    },
    mounted(){
        this.createCode()
    },
    methods:{
        loadData()
        {   this.error=false
            if(this.username==''||this.password==''||this.checkc=='')
            {
                this.error=true;
                this.errorinfo='信息不完整'
                return
            }
            if(this.checkc!=this.checkCode)
            {
                this.error=true;
                this.errorinfo='验证码错误'
                return
            }         
            //get 请求接口            
            var _this=this;           
             _this.$axios.post('http://175.24.9.165:8001/get_user',{
                      usr: _this.username,
                      psw: _this.password                 
             })           
             .then(function (response) {
                 if(response.data=='1')
                 {
                      //_this.$router.push({ path:'/',query: {haslogin: true}});
                      sessionStorage.setItem('username',_this.username);
                       sessionStorage.setItem('haslogin','1');
                      _this.$router.push({name:'home',params:{haslogin:'true',username:_this.username}});

                 }else{
                     _this.error=true;
                     _this.errorinfo='*帐号或密码错误'
                     _this.createCode()
                 }
             })            
            .catch(error=>{                
                console.log(error)             
                 })          
        },
         registerData()
        {    
            this.regis=false
            if(this.username==''||this.password==''||this.checkc=='')
            {
                this.regis=true;
                this.errorinfo2='信息不完整'
                return
            }
            if(this.checkc!=this.checkCode)
            {
                this.regis=true;
                this.errorinfo2='验证码错误'
                return
            }  
            //get 请求接口            
            var _this=this;           
             _this.$axios.post('http://175.24.9.165:8001/insert_user',{
                      usr: _this.username,
                      psw: _this.password                 
             })           
             .then(function (response) {
                 if(response.data=='1')
                 {
                      _this.regis=true;
                      _this.errorinfo2="注册成功"
                 }else{
                     _this.error=true;
                     
                 }
             })            
            .catch(error=>{                
                console.log(error)             
                 })          
        },
        register(){
            this.title='注册';
            this.reginfo2='登录';
            this.islog=false;
            this.isreg=true;
            this.tolog=true;
            this.toreg=false;
        },
        tologin(){
            this.title='登录';
            this.reginfo2='注册';
            this.islog=true;
            this.isreg=false;
            this.tolog=false;
            this.toreg=true;
        },
        createCode() {
		let code = "";
		const codeLength = 4; //验证码的长度  
		const random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数  
		for(let i = 0; i < codeLength; i++) { //循环操作  
			let index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）  
			code += random[index]; //根据索引取得随机数加到code上  
		}
		this.checkCode = code; //把code值赋给验证码  
	  }
    }

}
</script>


<style>
.login{
    background-color: #fff;
}
.bak{
  position:fixed;
  top:0;
  width:100%;
}
/*登录注册标题*/
.loginTitle{
    text-align: center;
    display: inline;
    font-size: 50px;
    color:aqua;
    padding-top:50px;
    margin-bottom:20px;
    position: absolute;
    top:50px;
    left:630px;
}
.error{
  font-size: 10px;
  color:red;
}
.loginTitle2{
    text-align: center;
    display: inline;
    font-size: 50px;
    color:rgb(255, 60, 0);
    padding-top:50px;
    margin-bottom:20px;
    position: absolute;
    top:50px;
    left:780px;
}
.showcode{
    position: absolute;
    top:220px;
    left:290px;
}
.checkco{
    width:150px;
    position: relative;
    left:-85px;
    top:0px;
}
.loginBox {
    background:rgb(243, 242, 242);
    padding:40px;
    max-width:320px;
    margin:0 auto;
    margin-top:60px;
    position: absolute;
    top:150px;
    left:580px;
}
.loginBox{
    padding-bottom:0;
}
.checkimg{
    width:25%;
    height: 30px;
    position: absolute;
    top:230px;
    left:260px;
    font-size: 16px;
    opacity: 0.98;
    background: rgba(138, 241, 3, 0.8);
    border-radius:5px;
    z-index: 1;
}
.lr-title{
    position: relative;
    height:32px;
    line-height: 32px;
    margin-bottom: 20px;
}
.lr-title h1{
    font-size: 20px;
    color:#666;
    font-weight: bold;
    width:19%;
}
.iconF5{
    width:30px;
    height:30px;
    position: absolute;
    top:230px;
    left:200px;
    color:blue;
    background: rgb(145, 255, 0);
}
.iconF5:hover{
    color:red;
    background: red;
    cursor:pointer;
}
.lr-title p{
    font-size: 12px;
    color:#999;
    position: absolute;
    right:0;
    top:0;
}
.lr-btn{
    color:#fff;
    text-align: center;
    letter-spacing: 5px;
    padding:8px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 30px;
}
.loginBox .el-input,.registerBox .el-input{
    margin-bottom: 20px;
}
.loginBox .el-alert ,.registerBox .el-alert{
    top:-18px;
    background-color: #888;
}
.loginBox .el-input input,.registerBox .el-input input{
    border-radius: 4px;
}
.loginBox h3,.registerBox h3{
    text-align: right;
    margin-bottom: 20px;
}
.loginBox h3 a,.registerBox h3 a{
    font-size: 13px;
    color:#999;
}


</style>