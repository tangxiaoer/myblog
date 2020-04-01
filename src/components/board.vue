<template>
<div>
    <div class="message">
        <h3>给我留言</h3>
       <el-input class="board"
                  type="textarea"
                  :rows="6"
                  placeholder="说点啥吧~"
                  v-model="textarea"
                  ref="content"
                  >
        </el-input>
        <el-button class="submit" @click="sendmsg">发送</el-button>
        <div class="msginfo"><p>|</p></div>
        <div class="number"><p>共:{{list[0].id}}条</p></div>
    </div>
    <div class="show">
        <div class="showbox" v-for="(item,index) in list.slice(0,count)" :key="'article'+index">
            <h3>{{item.username}}</h3>
            <div class="head"><img class="headimg" src='../../static/img/tou01.jpg'></div>
            <div class="time">{{item.datetime}}</div>
            <div class="message_show">{{item.message}}</div>
            <div class="answer"><a href="javascript:void(0);" @click="ans()">回复</a></div>
            <hr class=line>
        </div>
     </div>
    <div class="more" v-if="count<list.length" @click="loadMore">
       点击加载更多
    </div>
    <div class="nomore" v-else>没有更多了</div>
</div>
</template>

<script>
export default {
    data(){
        return{
            textarea:'',
            list:[],
            count:10,
            answerflag:true,
        }
    },
    mounted:function(){
        this.loadData();//需要触发的函数
       
    },
    methods:{
        sendmsg(){
            //get 请求接口            
            var _this=this;  
            if(_this.textarea==''){
                alert("内容不能为空")
                _this.$refs['content'].focus()
            }else{
                 _this.$axios.post('http://175.24.9.165:8001/insert_msg',{
                      txt: _this.textarea,         
             })           
             .then(function (response) {
                 if(response.data=='1')
                 {
                      _this.textarea='';
                      _this.$refs['content'].focus();
                      _this.loadData();
                 }else{
                     alert("something wrong!")
                 }
             })            
            .catch(error=>{                
                console.log(error)             
                 })  

            }
            
        },
        loadData(){
            var _this=this;           
             _this.$axios.post('http://175.24.9.165:8001/get_msg',{           
             })           
             .then(function (response) {
                // _this.title=response.data[0]['title']
                // _this.liked=response.data[0]['clike']
                // _this.text=response.data[0]['text']
                _this.list=response.data
             })            
            .catch(error=>{                
                console.log(error)             
            })          
        },
        ans(){
            alert("On the Way`");
        },
        loadMore:function(){
            this.count+=10;
        }
    }
}
</script>


<style scoped>
.message{
    width:55%;
    height: 250px;
    margin:auto;
    position: relative;
    top:400px;
    left:-210px;
    padding: 40px 0;
    font-size: 16px;
    opacity: 0.98;
    background: rgba(255, 255, 255, 0.8);
    border-radius:5px;
    z-index: 1;
}
.message h3{
    position: absolute;
    left:10px;
    top:-10px;
}
.board{
    width: 95%;
}

.submit{
    width:95%;
    position: relative;
    top:20px;
    background-color:rgb(0, 174, 255);
}
.line{
    position: relative;
    margin-top:-60px;
    background-color:rgb(214, 212, 212);
    height:1px;
}
.showbox{
    width:55%;
    height: 50px;
    margin:auto;
    position: relative;
    top:400px;
    left:-210px;
    padding: 50px 0;
    font-size: 15px;
    opacity: 0.98;
    background: rgba(255, 255, 255, 0.8);
    border-radius:5px;
    z-index: 1;
}
.headimg{
    width:10%;
    position: absolute;
    top:25px;
    left:10px;
}
.msginfo{
    position: absolute;
    top:230px;
    left:10px;
    font-size: 30px;
}
.number{
    position: absolute;
    top:240px;
    left:20px;
    font-size: 23px;
    color:rgb(6, 247, 6);
}
.showbox h3{
    position: absolute;
    top:0px;
    left:120px;
}
.time{
    position: absolute;
    left:120px;
    top:40px;
    font-size:12px;
    color:rgb(161, 161, 161);
}
.message_show{
    position:absolute;
    top:65px;
    left:120px;
}
.answer{
    position: absolute;
    top:110px;
    left:120px;
    font-size: 10px;
}
.more{
    width:55%;
    background-color: rgb(0, 238, 255);
    border-color:#478eea;
    border-radius: 3px;
    position: relative;
    color:#fff;
    margin:auto;
    bottom:-400px;
    left:-209px;
    height:30px;
    -webkit-user-select:none;
    z-index: 99999;
}
.more:hover{
    background-color: #478eea;
    cursor:pointer;
}
.nomore{
    width:55%;
    background-color: rgb(0, 238, 255);
    border-color:#478eea;
    border-radius: 3px;
    position: relative;
    color:rgb(250, 6, 6);
    margin:auto;
    bottom:-400px;
    left:-209px;
    height:30px;
    -webkit-user-select:none;
    z-index: 99999;

}

</style>