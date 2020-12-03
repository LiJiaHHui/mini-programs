<template>
    <div class="conditions">

        <el-form ref="form" :model="conditions" label-width="120px" size="mini">
            <el-form-item label="发卡机构：" style="margin-bottom: 0;">
                <el-select v-model="conditions.organizations" @change="changeOrganizations">
                    <el-option :value="null" label="不限" />
                    <el-option :value="1" label="发卡机构" />
                </el-select>
                <el-button v-if="conditions.organizations === 1" @click="alterOrganizations">选择发卡机构</el-button>
            </el-form-item>
            <!-- <el-form-item v-show="organizationsOptions.length > 0" label="">
                <span v-for="(items, index) in organizationsArr" :key="index">
                  <el-tag  type="info" class="tags" closable size="small" @close="items.selectFlag=false">
                    {{ items.stName }}
                  </el-tag>
                </span>
              </el-form-item> -->
            <el-dialog v-show="organizationsOptions > 0" :visible.sync="dialogFormVisible">
                选择发卡机构
                <el-form >
                <el-form-item >
                    <el-input v-model="state" autocomplete="off"></el-input>
                    查询
                </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button @click="dialogFormVisible = false">确 定</el-button>
                  </div>
            </el-dialog>


            <el-row>
                <el-col>


                    <el-form-item label="会员分类：" style="display: inline-block;">
                        <el-select v-model="conditions.memberActive">
                            <el-option v-for="(item, index) in memberActiveOptions" :key="index" :label="item.label"
                                :value="item.value" />
                        </el-select>

                    </el-form-item>
                    <el-form-item label="注册来源：" style="display: inline-block; padding-left:0px;">
                        <el-select v-model="conditions.registerSourceOptions">
                            <el-option v-for="(item, index) in registerSourceOptions" :key="index" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>

                    <el-form-item label="会员性别：" style="display: inline-block;">
                        <el-select v-model="conditions.gender">
                            <el-option :value="1" label="女" />
                            <el-option :value="2" label="男" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="线上线下同步：" style="display: inline-block; width: 300px;">
                        <el-select v-model="conditions.isSync">
                            <el-option label="不限" :value="null" />
                            <el-option label="未同步至ERP" :value="0" />
                            <el-option label="已同步到ERP" :value="1" />
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="推荐来源：" style="margin-bottom: 0;">
                <el-select v-model="conditions.regLy"  @change="changeRegLy">
                    <el-option label="不限" :value="null" />
                    <el-option label="选择门店" value="1" />
                    <el-option label="选择员工" value="2" />
                </el-select>
                <el-button v-if="conditions.regLy == 1" @click="alterRegLy">选择门店</el-button>
            </el-form-item>
            <el-dialog v-show="regLyOptions > 0" :visible.sync="dialogFormVisible">
                选择门店
                <el-form >
                <el-form-item >
                    <el-input v-model="state" autocomplete="off"></el-input>
                    查询
                </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button @click="dialogFormVisible = false">确 定</el-button>
                  </div>
            </el-dialog>


            <el-form-item label="卡种等级：" style="display: inline-block;">
                <el-select v-model="conditions.categoryCodes">
                    <el-option v-for="(item, index) in cardOptions" :key="index" :label="item.categoryName"
                        :value="item.categoryCode" />
                </el-select>
                <el-select v-model="conditions.gradeCodes" placeholder="请选择等级" size="mini" multiple collapse-tags
                    style="margin-left: 16px">
                    <el-option v-for="(item, index) in 7" :key="index" :label="'V' + item" :value="item" />
                </el-select>
            </el-form-item>

            <el-form-item label="注册时间:" style="display: inline-block;">
                <el-date-picker type="date" placeholder="选择日期" v-model="conditions.startDate"></el-date-picker>
                至
                <el-date-picker type="date" placeholder="选择日期" v-model="conditions.endDate"></el-date-picker>
            </el-form-item>

            <el-form-item label="会员搜索：" style="display: inline-block;margin-bottom: 0;">
                <el-input v-model="input" placeholder="请输入会员姓名、手机号、卡号" style="width:220px;"></el-input>
            </el-form-item>
            </el-row>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                state:'',
                input: '',
                cardOptions: '',
                organizationsOptions:'',
                regLyOptions:'',
                dialogFormVisible: false,
                conditions: {
                    categoryCodes: [], // 已选择卡种类
                    gradeCodes: [], // 已选卡等级
                    registerSource: null, // 注册来源
                    empCodes: null, // 健康顾问
                    memberActive: '', // 会员分类
                    gender: null, // 性别
                    organizations: null, // 门店
                    regLy: null,
                    startDate: '',
                    endDate: '',
                    isSync: null,
                    search: ''
                },
                memberActiveOptions: [ // 会员分类
                    { label: '不限', value: '' },
                    { label: '普通会员', value: '1' },
                    { label: '新增会员', value: '2' },
                    { label: '优质会员', value: '3' },
                    { label: '活跃会员', value: '4' },
                    { label: '沉寂会员', value: '9' }
                ],
                registerSourceOptions: [
                    { label: '不限', value: null },
                    { label: '门店推荐', value: 1 },
                    { label: '员工推荐', value: 2 },
                    { label: '商户渠道', value: 3 },
                    { label: '平台渠道', value: 4 },
                    { label: '支付即会员', value: 5 }
                ],

            };
        },
        methods: {
            changeOrganizations(value) {
                this.conditions.organizations = value
                console.log(this.conditions.organizations)
            },
            changeRegLy(value){
                this.conditions.regLy = value
                console.log(this.conditions.regLy)
            },
            alterOrganizations(){
                this.organizationsOptions=1
                this.dialogFormVisible=true
            },
            alterRegLy(){
                this.regLyOptions=1
                this.dialogFormVisible=true
            }
        },
        mounted() {


        }
    }
</script>
<style>
    .conditions {
        padding: 0;
        margin: 0;
    }
</style>