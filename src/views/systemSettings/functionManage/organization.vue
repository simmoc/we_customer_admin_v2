<template>
    <div>
        <div class="search-form">
            <el-form :inline="true" :model="formInline" label-position="right" label-width="120px" size="small">
                <el-form-item label="成员姓名：">
                    <el-input v-model="formInline.user" placeholder="请输入成员姓名" style="width:274px;"></el-input>
                </el-form-item>
                <el-form-item label="成员邮箱：">
                    <el-input v-model="formInline.user" placeholder="请输入成员邮箱" style="width:274px;"></el-input>
                </el-form-item>
                <el-form-item label="成员手机号：">
                    <el-input v-model="formInline.user" placeholder="请输入成员手机号" style="width:274px;"></el-input>
                </el-form-item>
                <el-form-item label="角色：">
                    <el-select v-model="formInline.region" placeholder="请选择" style="width:274px;">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="状态：">
                    <el-select v-model="formInline.region" placeholder="请选择" style="width:274px;">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="加入企业时间：">
                    <el-date-picker
                            v-model="formInline.value"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="default" @click="onSubmit">重置</el-button>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <page-main class="flex flex-direction-column">
            <div class="flex flex-1">
                <div class="table-search-box">
                    <el-input placeholder="请输入部门名称" size="small" class="table-search-input"></el-input>
                    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />

                </div>
                <div>
                    <div class="table-top-area">
                        <div>
                            <el-button type="primary" plain size="small" icon="el-icon-refresh">
                                同步企业微信</el-button>
                            <span class="table-top-tip">最近一次同步时间 2021-06-16 17:30:57</span>
                        </div>

                    </div>
                    <CustomerTable
                            :tableTitle="tableTitle"
                            :tableData="tableData"
                            :needPagination="true"
                            class="customer-tree"
                            :count="5"
                            :page="page"
                            :page_size="page_size"
                    >
                        <el-table-column
                                label="操作"
                                width="150px"
                        >
                            <template #default="scope">
                                <div>
                                    <el-popover
                                            placement="top-start"
                                            :width="200"
                                            trigger="hover"
                                    >
                                        <div>
                                            <el-input placeholder="请输入名称" size="small"></el-input>
                                            <div class="distribution-role-list">
                                                <div><span>超级管理员</span></div>
                                                <div><span>运营</span></div>
                                                <div><span>店长</span></div>
                                                <div><span>采购</span></div>
                                                <div><span>客服</span></div>
                                            </div>

                                        </div>

                                        <template #reference>
                                            <el-button type="text">
                                                分配角色
                                            </el-button>
                                        </template>
                                    </el-popover>

                                </div>
                            </template>
                        </el-table-column>
                    </CustomerTable>
                </div>

            </div>

        </page-main>
    </div>

</template>

<script>
  export default {
    name: "organization",
    data(){
      return {
        formInline:{},
        tableTitle: [
          {
            label: '成员姓名',
            prop: 'name',
          },
          {
            label: '成员邮箱',
            prop: 'email',
          },
          {
            label: '手机号',
            prop: 'tel',
          },
          {
            label: '部门',
            prop: 'department',
          },
          {
            label: '角色',
            prop: 'role',
          },
          {
            label: '状态',
            prop: 'status',
          },
          {
            label: '加入企业时间',
            prop: 'addTime',
          },
        ],
        tableData:[
          {
            name:'XXXX',
            email:'mayalin@catrun.cc',
            tel:'18617168008',
            department:'奇讯科技/深圳总公司/零售部门',
            role:'超级管理员',
            status:'已激活',
            addTime:'2021-06-16'
          },
          {
            name:'XXXX',
            email:'mayalin@catrun.cc',
            tel:'18617168008',
            department:'奇讯科技/深圳总公司/零售部门',
            role:'超级管理员',
            status:'已激活',
            addTime:'2021-06-16'
          },{
            name:'XXXX',
            email:'mayalin@catrun.cc',
            tel:'18617168008',
            department:'奇讯科技/深圳总公司/零售部门',
            role:'超级管理员',
            status:'已激活',
            addTime:'2021-06-16'
          },
        ],
        data: [
        {
          label: '奇讯科技',
          children: [
            {
              label: '深圳总公司',
              children: [
                {
                  label: '研发部门',
                },
                {
                  label: '研发部门',
                },
                {
                  label: '研发部门',
                },
              ],
            },
            {
              label: '长沙分公司',
              children: [
                {
                  label: '市场部门',
                  children: [
                    {
                      label: '外勤',
                    },
                  ],
                },

                {
                  label: '财务部',
                  children: [
                    {
                      label: '会计',
                    },
                  ],
                },
              ],
            }
          ],
        },
        ],
        defaultProps: {
          children: 'children',
          label: 'label',
        },
        page:1,
        page_size:10,
        options: [
          {
            value: 'Option1',
            label: 'Option1',
          },
          {
            value: 'Option2',
            label: 'Option2',
          },
          {
            value: 'Option3',
            label: 'Option3',
          },
          {
            value: 'Option4',
            label: 'Option4',
          },
          {
            value: 'Option5',
            label: 'Option5',
          },
        ],
        value:''
      }
    },
    methods:{
      onSubmit(){},
      handleNodeClick(data) {
        console.log(data)
      },
    }
  }
</script>

<style scoped lang="scss">
    .search-form{
        padding:24px;
        background-color: #fff;
        margin: 24px;
    }
    .table-search-box{
        width: 296px;
        flex-grow: 0;
        flex-shrink: 0;
        border-right:1px solid #edeef2;
        padding-right:16px;
        margin-right: 16px;
        height: inherit;
    }
    .table-search-input{
        margin-bottom: 24px;
    }
    .table-top-tip{
        color:#8c8c8c;
        font-size: 12px;
        margin-left: 8px;
    }
    .customer-tree{
        width: calc(100vw - 700px);
    }
    .distribution-role-list{
        &>div{
            margin-top: 8px;
            font-size: 12px;
         }
    }
</style>
