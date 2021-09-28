<template>
    <div>
        <el-table
                :header-cell-style="{background:'#f4f4f5'}" border size="small"
                tooltip-effect="dark"
                :data="tableData"
                style="width: 100%;margin-bottom: 20px;margin-top: 20px;"
                v-loading="loading"
                @selection-change="handleSelectionChange"
                :summary-method="getSummaries"
                :show-summary="showSummary"
        >
          <el-table-column v-if="needIndex"
            type="index"
            :index="typeIndex"
            width="50"
            label="序号"
            header-align="center" align="center">
          </el-table-column>
            <el-table-column
                    type="selection"
                    width="55"
            v-if="needSelect"
            :selectable="checkSelectable">
            </el-table-column>
            <el-table-column
                    :prop="item.prop"
                    :label="item.label"
                    v-for="(item,index) in tableTitle" :key="index"
                    :header-align="headerAlign"
            :align="align">
                <template #header #default="scope">
                        <span v-if="item.title_tips">
                            <el-popover
                                    placement="top-start"
                                    :width="item.tips_width?item.tips_width:200"
                                    trigger="hover"
                            >
                                <p v-html="item.title_tips">
                                </p>
                                <span slot="reference">
                                  <span>{{item.label}}</span>
                                  <i class="el-icon-question"></i>
                                </span>
                            </el-popover>
                        </span>
                        <span v-else>
                            {{item.label}}
                        </span>
                </template>
<!--                <el-table-column-->
<!--                        :prop="sub.prop"-->
<!--                        :label="sub.label"-->
<!--                        v-for="(sub,index) in item.children" :key="index" v-if="item.children" header-align="center">-->
<!--                    <template #default="scope">-->
<!--                        <div v-if="scope.row[sub.prop]==null || scope.row[sub.prop]===''"> -</div>-->
<!--                        <div v-else> {{scope.row[sub.prop]}}</div>-->
<!--                    </template>-->
<!--                </el-table-column>-->
                <template #default="scope">
                    <!-- slot-->
                    <slot :name="item.prop" :data="scope.row" v-if="item.type==='slot'"></slot>
                    <!-- button-->
                    <div v-else-if="item.type==='button'">
                        <el-button type="text " @click="getClick(scope.row,item.prop)">{{scope.row[item.prop]}}
                        </el-button>
                    </div>

                    <!-- popover-->
                    <div v-else-if="item.type==='popover'">
                        <el-popover
                                placement="top-start"
                                title=""
                                width="300"
                                trigger="hover"
                        >
                            <slot :name="item.prop" :data="scope.row"></slot>
                            <el-button slot="reference" type="text" :disabled="scope.row[item.prop]===0||scope.row[item.prop]==''||!scope.row[item.prop]||($route.name=='RegisterPending'&&!scope.row.other_channel_desc)||($route.name=='CommunicateList'&&!scope.row.other_channel_desc)">
                                {{item.show?(scope.row[item.prop]?scope.row[item.prop]:'-'):
                                item.text?item.text:'详情'}}
                            </el-button>
                        </el-popover>
                    </div>
                    <!-- merge-->
                    <div v-else-if="item.type==='merge'">
                       {{scope.row[item.prop]}}/{{scope.row[item.mergeProp]}}
                    </div>
                    <div v-else-if="scope.row[item.prop]===''">-</div>
                    <div v-else>{{scope.row[item.prop]}}</div>
                </template>
            </el-table-column>
            <slot></slot>

        </el-table>
        <div class="list-control" v-if="needPagination">
            <div class="list-pagination">
                <el-pagination
                        small
                        @current-change="handleCurrentChange"
                        :current-page="page"
                        :page-size="page_size"
                        layout="total,sizes, prev, pager, next, jumper"
                        :total="count"
                        @size-change="handleSizeChange"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script setup>
  const props = defineProps({
    /*
      * 表格头
      * */
    tableTitle: {
      default: () => []
    },
    /*
    * 表格数据
    * */
    tableData: {
      default: () => []
    },
    /*
    * 是否显示loading
    * */
    loading: {
      type: Boolean,
      default: false
    },
    /*
    * 分页的总数据
    * */
    count: {
      type: Number,
      default: null
    },
    /*
    * 分页一页显示多少条
    * */
    page_size: {
      type: Number,
      default: 10
    },
    /*
   * 分页当前第几页
   * */
    page: {
      type: Number,
      default: 1
    },
    /*
   * 是否需要用到select选项
   * */
    needSelect:{
      type:Boolean,
      default:false
    },
    /*
   * 是否需要用到序号
   * */
    needIndex:{
      type:Boolean,
      default:false
    },
    /*
   * 表格标题的水平方向
   * */
    headerAlign:{
      type:String,
      default:'left'
    },
    /*
   * 表格数据的水平方向
   * */
    align:{
      type:String,
      default:'left'
    },
    /*
   * 是否需要分页
   * */
    needPagination:{
      type:Boolean,
      default:true
    },
    // 是否显示表格合计行
    showSummary:{
      type:Boolean,
      default:false
    },
    //select禁用
    checkSelectable:{
      type:Function,
      default:null
    },
    getSummaries:{
      type: Function,
      default: null
    }
  })
  const emit = defineEmits(['changePage', 'handleClick','handleSelect'])
  function typeIndex(index) {
    return index + (props.page - 1) * parseInt(props.page_size) + 1;
  }
  function handleCurrentChange(val) {
    emit('changePage',Number(val))
  }
  function getClick(data,prop){
    emit('handleClick',{data,prop})
  }
  function handleSelectionChange(data){
    emit('handleSelect',data)
  }
  function handleSizeChange(data){
    emit('handleSizeChange',data)
  }
</script>

<style scoped lang="scss">
    .list-control {

        display: flex;
        align-items: center;

        .list-pagination {
            flex: 1;
            text-align: right;

            .el-pagination {
            }
        }

    }
</style>
