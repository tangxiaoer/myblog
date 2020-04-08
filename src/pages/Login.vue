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
        <el-input v-model="username" v-show="isuser"></el-input>
        <el-input v-model="password" type="password" v-show="ispsw"></el-input>
        <p v-if="error" class="error">*帐号或密码错误</p>
        <p v-if="regis" class="error">注册成功</p>
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

        }
    },
    methods:{
        loadData()
        {            
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
                 }
             })            
            .catch(error=>{                
                console.log(error)             
                 })          
        },
         registerData()
        {            
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