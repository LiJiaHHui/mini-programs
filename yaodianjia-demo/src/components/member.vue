<template>
    <div class="">
        <conditions v-show='isConditions'></conditions>
        <div>
            会员搜索：
            <el-input size="mini" placeholder="请输入会员姓名、手机号、卡号" style="width: 300px;"></el-input>
            <el-button size="mini" type="primary" :loading="true" style="display: inline-block;">查询</el-button>
            <el-button size="mini" style="display: inline-block;">重置</el-button>

            <el-button size="mini" style="position:absolute;right:10px;" @click='changeConditions'>高级搜索</el-button>
        </div>
        <div>
            <el-button size="mini" type="primary">批量导出<i class="el-icon-download el-icon--right"></i></el-button>
            <el-button size="mini">导出记录</el-button>
            <span class="tips">提示：批量导出功能最多一次导出50000条数据批量同步ERP</span>

            <el-button size="mini" type="primary" style="position: absolute;right: 0;">批量同步ERP</el-button>
        </div>
        <div class="card">
            <span>微信头像</span>
            <span>昵称</span>
            <span>会员姓名</span>
            <span>会员卡号</span>
            <span>性别</span>
            <span>年龄</span>
            <span>手机号码</span>
            <span>会员分类</span>
            <span>注册时间</span>
            <span>注册来源</span>
            <span>操作</span>
        </div>
        <div class="content"></div>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="10"
                layout="total, sizes, prev, pager, next, jumper" :total="100">
            </el-pagination>
        </div>

    </div>
</template>
<script>
    import conditions from './conditions'
    import download from '../assets/download.png'
    export default {
        name: "KEBAB_CASE_NAME",
        data() {
            return {
                isConditions: false
            }
        },
        props: {},
        methods: {
            changeConditions() {
                this.isConditions = !this.isConditions
            }
        },
        watch: {},
        beforeCreate() { },
        created() { },
        beforeMount() { },
        mounted() { },
        beforeUpdate() { },
        updated() { },
        beforeDestroy() { },
        destroyed() { },
        computed: {},
        components: {
            conditions
        },
    }
</script>
<style lang="scss">
    .tips {
        font-size: 12px;
        color: #F89200;
        margin-left: 20px;
        vertical-align: middle;
    }

    .card {
        display: grid;
        grid-template-columns: repeat(auto-fill, 110px);
    }
    .content{
        width: 600px;
        height: 240px;
    }
    .block {
        text-align: right;
        position: relative;
    }
</style>