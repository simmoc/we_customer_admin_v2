<template>
    <page-main>
        <div class="title">
            <span>基本配置</span>
        </div>
        <el-form ref="form" :model="form" label-width="120px" label-position="top" style="width:520px;">
            <el-form-item label="角色名称" required>
                <el-input v-model="form.name" size="small"></el-input>
            </el-form-item>
        </el-form>
        <div class="title">
            <span>权限配置</span>
        </div>
        <STable
                :tableTitle="tableTitle2"
                :tableData="data"
                :showCheck="false"
                @checkAll="checkAll"
                :checkedAllVal="checkedAllVal">
            <template  slot="edit">
                <el-checkbox >可见</el-checkbox>
            </template>
            <template  slot="sort">
                <el-checkbox  >
                    可见</el-checkbox>
            </template>
        </STable>
        <div class="mt20 tr">
            <el-button type="primary" size="small">确定</el-button>
            <el-button size="small">取消</el-button>
        </div>
    </page-main>
</template>

<script>
    import STable from '@/components/STable/index.vue'

  export default {
    name: "organization",
    components:{STable},
    data(){
      return{
        tableTitle2: [
          {
            label: '模块',
            prop: 'title',
          },
          {
            label: '访问权限',
            prop: 'title',
            parent: 'title',
          },
          {
            label: '功能权限',
            prop: 'title',
          },
          {
            label: '全选',
            prop: 'checkAll',
          },
        ],
        form:{},
        data:[
          {
            "id": 3,
            "title": "基础设置",
            "route": "#",
            "level": 0,
            "parent_id": 0,
            "access": "read",
            "describe": null,
            "children": [
              {
                "id": 4,
                "title": "访问角色管理",
                "route": "/roles",
                "level": 0,
                "parent_id": 3,
                "access": "read",
                "describe": null,
                "children": [
                  {
                    "id": 99,
                    "title": "访问1",
                    "route": "/roles",
                    "level": 0,
                    "parent_id": 3,
                    "access": "read",
                    "describe": null,
                  },
                  {
                    "id": 98,
                    "title": "访问2",
                    "route": "/roles",
                    "level": 0,
                    "parent_id": 3,
                    "access": "read",
                    "describe": null,
                  }
                ]
              },
              {
                "id": 5,
                "title": "角色管理",
                "route": "/role/*",
                "level": 0,
                "parent_id": 3,
                "access": "write",
                "describe": null,
                "children": []
              },
              {
                "id": 6,
                "title": "访问权限管理",
                "route": "/authority",
                "level": 0,
                "parent_id": 3,
                "access": "read",
                "describe": null,
                "children": []
              },
              {
                "id": 7,
                "title": "权限管理",
                "route": "/authority/*",
                "level": 0,
                "parent_id": 3,
                "access": "write",
                "describe": null,
                "children": []
              },
              {
                "id": 8,
                "title": "菜单管理",
                "route": "/menu/*",
                "level": 0,
                "parent_id": 3,
                "access": "write",
                "describe": null,
                "children": []
              },
              {
                "id": 9,
                "title": "访问菜单管理",
                "route": "/menus",
                "level": 0,
                "parent_id": 3,
                "access": "read",
                "describe": null,
                "children": []
              }
            ]
          }
        ],
        checkedAllVal:{
          menuKey:false,
          menuButtonKey:false
        },
      }
    },
    methods:{
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1,
            }
          } else {
            return {
              rowspan: 0,
              colspan: 0,
            }
          }
        }
      },
      checkAll(){}
    }
  }
</script>

<style scoped>
.title{
    display: flex;
    justify-content: space-between;
}
    .mt20{
        margin-top: 20px;
    }
</style>
