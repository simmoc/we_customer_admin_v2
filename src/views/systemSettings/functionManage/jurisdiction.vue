<template>
    <page-main>
        <div class="title">
            <span>角色列表</span>
            <el-button type="primary" size="mini" @click="goTo">+ 添加角色</el-button>
        </div>
        <CustomerTable
                :tableTitle="tableTitle"
                :tableData="tableData"
                :needPagination="true"
        >
            <el-table-column
                    label="操作"
                    width="300px"
            >
                <template #default="scope">
                    <div>
                        <el-button type="text" @click="userDetail('GeneralizeList',scope.row.promoter_id)">
                            查看权限
                        </el-button>
                        <el-button type="text" @click="userDetail('LabourChargeList',scope.row.promoter_id)">
                            关联成员
                        </el-button>
                        <el-button type="text" @click="userDetail('LabourChargeList',scope.row.promoter_id)">
                            编辑
                        </el-button>
                        <el-button type="text" @click="userDetail('LabourChargeList',scope.row.promoter_id)">
                            删除
                        </el-button>
                    </div>
                </template>
            </el-table-column>
        </CustomerTable>
    </page-main>
</template>

<script>
    // import CustomerTable from '@/components/CustomerTable'

  export default {
    name: "organization",
    // components:{CustomerTable},
    data(){
      return{
        tableTitle: [
          {
            label: '角色名称',
            prop: 'name',
          },
          {
            label: '关联成员数',
            prop: 'num',
          },
          {
            label: '最后修改时间',
            prop: 'time',
          },
        ],
        tableData:[
          {
            name:'XXXX',
            num:1,
            time:'2021-06-16 11:19:27'
          },
          {
            name:'XXXX',
            num:1,
            time:'2021-06-16 11:19:27'
          },
          {
            name:'XXXX',
            num:1,
            time:'2021-06-16 11:19:27'
          }
        ]
      }
    },
    methods:{
      userDetail(){},
      goTo(){
        this.$router.push({name:'addRole'})
      }
    }
  }
</script>

<style scoped>
.title{
    display: flex;
    justify-content: space-between;
}
</style>
