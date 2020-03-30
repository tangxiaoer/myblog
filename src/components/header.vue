<!-- 头部公用 -->
<template>
<div class="">
	<div class="headBack">
		<el-row class="container">
			<el-col :span="24">
				<!-- pc端导航 -->
				<div class="headBox">
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true"  active-text-color="#ffd04b">
						<el-menu-item index="/">首页</el-menu-item>

						
						<el-submenu index="/Share">
							<template slot="title"> 学习分享</template>
							<!-- <el-menu-item v-for="(item,index) in classListObj" :key="'class1'+index.id" :index="'/Share?classId='+item.id">{{item.name}}</el-menu-item> -->
						    <el-menu-item index="/Share?classId=1">Python</el-menu-item>
							<el-menu-item index="/Share?classId=2">Web前端</el-menu-item>
							<el-menu-item index="/Share?classId=3">数据库</el-menu-item>
							<el-menu-item index="/Share?classId=4">杂言碎语</el-menu-item>
						</el-submenu>


						<el-menu-item index="3"> 学习资源</el-menu-item>
						<el-menu-item index="4"> 赞赏</el-menu-item>
						<!--<el-menu-item index="/Friendslink"><i class="fa fa-wa fa-users"></i> 伙伴</el-menu-item>-->
						<el-menu-item index="5">留言板</el-menu-item>
						<el-menu-item index="/aboutme"> 关于</el-menu-item>
						<div index="" class="pcsearchbox">
							<i class="el-icon-search pcsearchicon"></i>
							<div class="pcsearchinput" :class="input?'hasSearched':''">
								<el-input placeholder="搜索" icon="search" v-model="input" :on-icon-click="searchEnterFun" @keyup.enter.native="searchEnterFun" @change="searchChangeFun">
								</el-input>
							</div>
						</div>
						<div class="userInfo">
							<div v-show="!haslogin" class="nologin">
								<a href="" @click.prevent="loginFun">登录</a>
							</div>
							<div v-show="haslogin" class="haslogin" >
								<span class="svg-container">
                                   <svg class="icon" aria-hidden="true" style="color:white">
                                        <use xlink:href="#icon-one1"></use>
                                   </svg>
                                </span>

								<ul class="haslogin-info">
									<li>
										<a href="#/UserInfo">个人中心</a>
									</li>
									<li>
										<a href="#/LikeCollect?like=1">喜欢列表</a>
									</li>
									<li>
										<a href="#/LikeCollect?like=2">收藏列表</a>
									</li>
									<li>
										<a href="javascript:void(0);" @click="userlogout">退出登录</a>
									</li>
								</ul>
							</div>
						</div>						
					</el-menu>
				</div>
				<!-- 移动端导航 -->
			</el-col>
		</el-row>
	</div>
</div>
</template>
<script>
export default {
	data() { //选项 / 数据
		return {
			userInfo: '', //用户信息
			haslogin: false, //是否已登录
			classListObj: [{id: 1, name: ''},{id: 2, name: 'Python'},{id:3,name:'Web前端'}], //技术分类
			activeIndex: '/', //当前选择的路由模块
			state: '', //icon点击状态
			pMenu: true, //手机端菜单打开
			// path:'',//当前打开页面的路径
			input: '', //input输入内容
			headBg: 'url(static/img/headbg05.jpg)', //头部背景图
			headTou: '', //头像
			projectList: '' //项目列表
		}
	},
	watch: {
		// 如果路由有变化，会再次执行该方法
		'$route': 'routeChange'
	},
	created(){
		this.routeChange();
		this.gethaslogin();
	},
	mounted:function(){
        
    },
	methods:{
		// 用户退出登录
		userlogout: function() {
			var that = this;
			this.$confirm('是否确认退出?', '退出提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				// console.log(that.$route.path);
				that.haslogin=false;
			    that.$router.push({path:'/'});
				
			}).catch(() => {
				//
			});

		},
		loginFun(){
			this.$router.push({ path:'/login'});
		},
		routeChange: function() {
			this.activeIndex = this.$route.path == '/' ? '/' : this.$route.path;
		},
		gethaslogin()
		{
			var hasloginf= this.$route.query.haslogin
			this.haslogin=hasloginf
		}
	}
	
}
</script>

<style>
/*********头部导航栏********/

/*头部导航栏盒子*/
.headBack {
	width: 100%;
	background: rgba(5, 124, 243, 0.6);
	/*margin-bottom:30px;*/
	box-shadow: 0 2px 4px 0 rgba(129, 253, 113, 0.12), 0 0 6px 0 rgba(157, 255, 101, 0.04);
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	z-index: 100;
}

/* .headBox li.is-active {
	background: rgba(161, 241, 124, 0.7);

}  */

.el-menu--popup-bottom-start{
	left:200px;
	background-color:rgb(0, 204, 255);
}

.el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
	border-bottom: none!important;
}

.headBox .el-menu {
	background: transparent;
	border-bottom: none!important;
}

.headBox .el-menu-demo li.el-menu-item,
.headBox .el-menu--horizontal .el-submenu .el-submenu__title {
	height: 38px;
	line-height: 38px;
	border-bottom: none!important;

}

.headBox .el-submenu li.el-menu-item {
	height: 38px;
	line-height: 38px;
}

.headBox li .fa-wa {
	vertical-align: baseline;
}
.el-menu--horizontal.ul{
	font-size: 100px;
}


.headBox ul li.el-menu-item,
.headBox ul li.el-menu-item.is-active,
.headBox ul li.el-menu-item:hover,
.headBox .el-submenu div.el-submenu__title,
.headBox .el-submenu__title i.el-submenu__icon-arrow {
	color: rgb(250, 246, 246);

	left: 200px;
}

.headBox .el-menu--horizontal .el-submenu>.el-menu {
	top: 38px;
	border: none;
	padding: 0;
}


.headBox>ul li.el-submenu:hover .el-submenu__title {
	background: #48456C;
	border-bottom: none;
}
.headBox>ul li.el-menu-item:hover{
	background-color:rgb(248, 8, 40);
}



.el-menu-item.is-active {
      background-color: #07abf7 !important;
      color: #fff;
    }


.headBox>ul .el-submenu .el-menu,
.headBox>ul .el-submenu .el-menu .el-menu-item {
	background: #48456C;
}

.headBox>ul .el-submenu .el-menu .el-menu-item {
	min-width: 0;
}

.headBox>ul .el-submenu .el-menu .el-menu-item:hover {
	background: rgb(158, 111, 96);
}

/*pc搜索框*/

.headBox .pcsearchbox {
	padding: 0;
	max-width: 170px;
	/*min-width: 30px;*/
	height: 100%;
	line-height: 38px;
	position: absolute;
	top: 0;
	right: 50px;
	cursor: pointer;
}

.headBox .pcsearchbox:hover .pcsearchinput {
	opacity: 1;
	/*transform: scaleX(1);*/
	visibility: visible;
}

.headBox .pcsearchbox i.pcsearchicon {
	color: #fff;
	padding-left: 10px;
}

.headBox .pcsearchbox .pcsearchinput {
	width: 180px;
	padding: 10px 20px 10px 20px;
	background: rgba(40, 42, 44, 0.6);
	border-radius: 0 0 2px 2px;
	position: absolute;
	right: 0;
	top: 38px;
	opacity: 0;
	visibility: hidden;
	/*transform: scaleX(0);*/
	transform-origin: right;
	transition: all 0.3s ease-out;
}

.headBox .pcsearchbox .hasSearched {
	opacity: 1;
	/*transform: scaleX(1);*/
	visibility: visible;
}

.headBox .pcsearchbox .el-input {
	width: 100%;
}

.headBox .el-input__inner {
	height: 30px;
	border: none;
	background: #fff;
	/*border: 1px solid #333;*/
	border-radius: 2px;
	padding-right: 10px;
}

.headBox .userInfo {
	height: 100%;
	line-height: 38px;
	position: absolute;
	right: 80px;
	top: 0;
	color: #fff;
}

.headBox .userInfo a {
	color: #fff;
	font-size: 13px;
	transition: all 0.2s ease-out;
}

.headBox .userInfo a:hover {
	color: rgb(44, 26, 238);
}

.headBox .nologin {
	text-align: right;
}

.headBox .haslogin {
	text-align: center;
	color:#00a7e0;
	position: relative;
	min-width: 80px;
	cursor: pointer;
}

.headBox .haslogin:hover ul {
	visibility: visible;
	opacity: 1;
}

.headBox .haslogin ul {
	background: rgba(18, 129, 240, 0.6);
	padding: 5px 10px;
	position: absolute;
	right: 0;
	opacity: 0;
	transition: all 0.3s ease-out;
}



.headBox .haslogin ul li:last-child {
	border-bottom: 1px solid transparent;
}

/*******移动端*******/

.mobileBox {
	position: relative;
	height: 38px;
	line-height: 38px;
	color: #fff;
}

.hideMenu {
	position: relative;
	width: 100%;
	height: 100%;
	line-height: 38px;
}

.hideMenu ul.mlistmenu {
	width: 100%;
	position: absolute;
	left: 0;
	top: 100%;
	box-sizing: border-box;
	z-index: 999;
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .12), 0 0 8px 0 rgba(0, 0, 0, .04);
	background: #48456C;
	color: #fff;
	border-right: none;
}

.hideMenu .el-submenu .el-menu {
	background: #64609E;
}

.hideMenu .el-menu-item,
.hideMenu .el-submenu__title {
	color: rgb(252, 10, 10);
}

.hideMenu>i {
	position: absolute;
	left: 10px;
	top: 12px;
	width: 30px;
	height: 30px;
	font-size: 16px;
	color: #fff;
	cursor: pointer;
}

.hideMenu .el-menu-item,
.el-submenu__title {
	height: 40px;
	line-height: 40px;
}

.mobileBox .searchBox {
	padding-left: 40px;
	width: 100%;
	box-sizing: border-box;
}

.mobileBox .searchBox .el-input__inner {
	display: block;
	border-radius: 2px;
	border: none;
	height: 25px;
}

.hideMenu ul.mlistmenu.pshow {
	display: block;
}


.hideMenu ul.mlistmenu .el-submenu__icon-arrow,
.mobileBox li.el-menu-item a {
	color: #fff;
}

.hideMenu>ul li.el-menu-item:hover,
.hideMenu>ul li.el-menu-item.is-active {
	background: #48576a;
}



/*头部背景图*/

.headImgBox {
	height: 650px;
	position: relative;
	width: 100%;
	background-size: cover;
	background-position: center 50%;
	background-repeat: no-repeat;
	margin-bottom: 90px;
}

.h-information {
	text-align: center;
	width: 70%;
	margin: auto;
	position: relative;
	top: 480px;
	padding: 40px 0;
	font-size: 16px;
	opacity: 0.98;
	background: rgba(230, 244, 249, 0.8);
	border-radius: 5px;
	z-index: 1;
	animation: b 1s ease-out;
	-webkit-animation: b 1s ease-out;
}

@-webkit-keyframes b {
	0% {
		-webkit-transform: translateY(90px);
		transform: translateY(90px);
	}
	80% {
		-webkit-transform: translateY(5px);
		transform: translateY(5px)
	}
	90% {
		-webkit-transform: translateY(-5px);
		transform: translateY(-5px)
	}
	to {
		-webkit-transform: translateY(0);
		transform: translateY(0)
	}
}

@keyframes b {
	0% {
		-webkit-transform: translateY(90px);
		transform: translateY(90px);
	}
	80% {
		-webkit-transform: translateY(5px);
		transform: translateY(5px)
	}
	90% {
		-webkit-transform: translateY(-5px);
		transform: translateY(-5px)
	}
	to {
		-webkit-transform: translateY(0);
		transform: translateY(0)
	}
}

.h-information img {
	width: 100px;
	height: 100px;
	border-radius: 100%;
	transition: all .4s ease-in-out;
	-webkit-transition: all .4s ease-in-out;
	object-fit: cover;
}

.h-information img:hover {
	transform: rotate(360deg);
	-webkit-transform: rotate(360deg);
}

.h-information h2 {
	margin-top: 20px;
	font-size: 18px;
	font-weight: 700;
	/*font-family: 'Sigmar One';*/
}
.h-information h2  a{
	background: linear-gradient(to right, #DF2050, #48456D);
	-webkit-background-clip: text;
	color: transparent;
}
.headImgBox .scene {
	width: 100%;
	/*height:300px;*/
	text-align: center;
	font-size: 100px;
	font-weight: 200;
	color: #fff;
	position: absolute;
	left: 0;
	top: 160px;
	font-family: 'Sigmar One', Arial;
	text-shadow: 0 2px 2px #47456d;

}

.headImgBox .scene span {
	transform: matrix(1, 0, 0, 1, 0, 0);
	-webkit-transform: matrix(1, 0, 0, 1, 0, 0);
	text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
}

.saying:after {
	content: "|";
	font-family: Arial, sans-serif;
	font-size: 1em;
	/*line-height: 0;*/
	display: inline-block;
	vertical-align: baseline;
	opacity: 1;
	text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
	animation: caret 500ms infinite;
}

@keyframes caret {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
}
</style>
