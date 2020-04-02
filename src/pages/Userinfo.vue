<template>
    <div class="home">
        <noah-header></noah-header>
        <noah-toper></noah-toper>
        <div class="userinfo">
            <h2>个人资料</h2>
            <hr class="oneline">
            <img class="usrimg" src='../../static/img/tou01.jpg'>
            <div class="headbox" >
                <p class="userid">ID:  {{username}}</p>
                <p class="userliked">喜欢: {{userinfo[0].liked}}</p>
                <p class="usersaved">收藏: {{userinfo[0].saved}}</p>
                <hr class="twoline">
            </div>
            <a class="edit" href="javascript:void(0);" @click="editinfo">{{eidtbutton}}</a>
            <div v-if="editflag" class="detailbox">
                <p align="left" class="flag">全站标识: <input disabled="disabled" v-model="userinfo[0].flag" class="flaginput">
                <br/><br/><br/>
                性别: <input v-model="userinfo[0].sex" class="flaginput">
                <br/><br/><br/>
                公司: <input v-model="userinfo[0].company" class="flaginput">
                <br/><br/><br/>
                手机号码: <input v-model="userinfo[0].telphone" class="flaginput">
                <br/><br/><br/>
                 E-Mail: <input v-model="userinfo[0].email" class="flaginput">
                 </p>
                <br/>
            </div>
            <div v-else class="detailbox">
                <p align="left" class="flag">全站标识: {{userinfo[0].flag}}
                <br/><br/><br/>
                性别: {{userinfo[0].sex}}
                <br/><br/><br/>
                公司: {{userinfo[0].company}}
                <br/><br/><br/>
                手机号码: {{userinfo[0].telphone}}
                <br/><br/><br/>
                 E-Mail: {{userinfo[0].email}}</p>
                <br/>
            </div>
        </div>
        <noah-footer></noah-footer>
    </div>
</template>

<script>
import header from '../components/header.vue'
import toper from '../components/top.vue'
import footer from '../components/foter.vue'
export default {
    data(){
        return{
            username:'',
            userinfo:[],
            eidtbutton:'编辑',
            editflag:false
        }
    },
    mounted(){
         this.username=sessionStorage.getItem('username');
         this.loadData();
    },
    methods:{
        login(){
            this.$router.push({ path:'/login'  });
        },
        loadData(){
             var _this=this;
             _this.$axios.post('http://175.24.9.165:8001/get_userinfo',{
                 usr:_this.username
             }).then(function(response){
                 _this.userinfo=response.data
             }).catch(error=>{                
                console.log(error)             
            }) 
        },
        editinfo(){
            if(this.eidtbutton=="编辑")
            {
                this.eidtbutton="保存"
                this.editflag=true
            }else
            {
                this.updateinfo()
                this.editflag=false
                this.loadData()
            }
        },
        updateinfo(){
            var _this=this
            _this.$axios.post('http://175.24.9.165:8001/up_userinfo',{
                sex:_this.userinfo[0].sex,
                company:_this.userinfo[0].company,
                telphone:_this.userinfo[0].telphone,
                email:_this.userinfo[0].email,
                usr:_this.username
            }).then(function (response){
                if(response.data=="1")
                {
                    alert("保存成功！")
                }else
                {
                    alert("未知错误~")
                }

            }).catch(error=>{                
                console.log(error)   
            })
        }
        
    },
    components: { //定义组件
            'noah-header':header,
            'noah-toper':toper,
            'noah-footer':footer
    }
}
</script>

<style>
.userinfo{
    width:80%;
    height: 600px;
    margin:auto;
    position: relative;
    top:370px;
    left:0px;
    padding: 40px 0;
    font-size: 15px;
    opacity: 0.98;
    background: rgba(126, 216, 126, 0.8);
    border-radius:5px;
    z-index: 1;
}
.userinfo h2{
    position: absolute;
    top:10px;
    left:50px;
}
.edit{
    position: absolute;
    right:100px;
    top:250px;
    z-index:999;
}
.oneline{
    position: absolute;
    top:80px;
    left:50px;
    width:90%;
}
.usrimg{
    width:10%;
    position: absolute;
    top:120px;
    left:50px;
    border-radius:100px;
}
.headbox{
    position: absolute;
    top:100px;
    left:200px;
    width:100%;
    color:rgb(122, 122, 122);
}
.userid{
    color:rgb(155, 154, 154);
    font-size: 15px;
    position:absolute;
    top:5px;

}
.twoline{
    position: absolute;
    top:130px;
    left:-30px;
    width:80%;
}
.userliked{
    color:black;
    font-size: 13px;
    position:absolute;
    top:50px;
}
.usersaved{
    color:black;
    font-size: 13px;
    position:absolute;
    top:50px;
    left:50px;
}
.detailbox{
    width:100%;
    position: absolute;
    top:250px;
    left:200px;
    color:black;
    
}
.flaginput{
    width:20%;
    height:20px;
}
</style>