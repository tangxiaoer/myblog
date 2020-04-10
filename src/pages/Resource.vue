<template>
    <div class="home">
        <noah-header></noah-header>
        <noah-toper></noah-toper>
        <noah-info></noah-info>
        <noah-main></noah-main>
        <el-button @click="resetDateFilter">清除日期过滤器</el-button>
        <el-button @click="clearFilter">清除所有过滤器</el-button>
        <el-table
            ref="filterTable"
            :data="tableData"
            style="width: 55%;position:relative;top:375px;left:115px">
            <el-table-column
                prop="date"
                label="日期"
                sortable
                width="180"
                column-key="date"
                :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                :filter-method="filterHandler"
            >
            <template slot-scope="scope">
                    <div>{{scope.row.date.slice(0,10)}}</div>
                </template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="标题"
                width="180"
                style="color:red;">
                <template slot-scope="scope">
                    <div style="color:red;">{{scope.row.name}}</div>
                </template>
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                :formatter="formatter">
                <template slot-scope="scope">
                    <el-link :href="scope.row.address" :underline="false" target="_blank">{{scope.row.address}}</el-link>
                </template>
            </el-table-column>
            <el-table-column
                prop="tag"
                label="标签"
                width="100"
                :filters="[{ text: 'Python', value: 'Python' }]"
                :filter-method="filterTag"
                filter-placement="bottom-end">
            <template slot-scope="scope">
            <el-tag
                :type="scope.row.tag === '家' ? 'primary' : 'success'"
                disable-transitions>{{scope.row.tag}}</el-tag>
            </template>
            </el-table-column>
        </el-table>
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
            tableData: []
        }
    },
    mounted(){
        this.loadData();
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
         loadData(){
             var _this=this
            _this.$axios.post('http://175.24.9.165:8002/get_resource',{

            }).then(function (response){
                _this.tableData=response.data
            }).catch(error=>{
                console.log(error)
            })
         },
         resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
        },
        clearFilter() {
          this.$refs.filterTable.clearFilter();
        },
        formatter(row, column) {
          return row.address;
        },
        filterTag(value, row) {
          return row.tag === value;
        },
        filterHandler(value, row, column) {
          const property = column['property'];
          return row[property] === value;
        }
    },
    components: { //定义组件
            'noah-header':header,
            'noah-toper':toper,
            'noah-info':rightlist,
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