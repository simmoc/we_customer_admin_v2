<template>
    <div class="s-table">
        <ul class="table-tree table-head">
            <li v-for="(item,index) in tableTitle" :key="index" :style="{flex:`0 0 ${width}px`,color:'#171717'}">

                <el-checkbox v-if="item.type=='check'" v-model="checkedVal[item.key]" @change="checkBoxCheck(item.key)">
                    {{item.label}}
                </el-checkbox>
                <span v-else>{{item.label}}</span>
            </li>
        </ul>
        <ul>
            <li v-for="(item,index) in tableData" class="table-tree" :key="item+index"
                v-if="tableData||tableData.length>0">
                <div :style="{flex:`0 0 ${width}px`,color:'#666'} ">
                    <el-checkbox>{{item.title}}</el-checkbox>
                </div>
                <ul>
                    <li v-for="(sub,index) in item.children" class="table-tree" :key="sub+index"
                        v-if="tableData||tableData.length>0">
                        <div :style="{flex:`0 0 ${width}px`}">
                            <el-checkbox>{{sub.title}}</el-checkbox>
                            <i class="el-icon-question" v-if="sub.describe"></i>
                        </div>
                        <div :style="{flex:`0 0 ${width}px`}">
                            <el-checkbox v-for="(leaf,index) in sub.children">
                                {{leaf.title}}
                                <i class="el-icon-question" v-if="leaf.describe"></i>
                            </el-checkbox>

                        </div>
                        <div :style="{flex:`0 0 ${width}px`}">
                            <el-checkbox ></el-checkbox>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        <!--        <List v-bind="$attrs" v-on="$listeners" :width="width">-->
        <!--            <template slot-scope="val" slot="edit">-->
        <!--                <slot :msg="val.msg" name="edit"></slot>-->
        <!--            </template>-->
        <!--            <template slot-scope="val" slot="sort">-->
        <!--                <slot :msg="val.msg" name="sort"></slot>-->
        <!--            </template>-->
        <!--&lt;!&ndash;            <template scope="val">&ndash;&gt;-->
        <!--&lt;!&ndash;                <slot :msg="val" name="edit"></slot>&ndash;&gt;-->
        <!--&lt;!&ndash;            </template>&ndash;&gt;-->
        <!--&lt;!&ndash;            <template scope="val">&ndash;&gt;-->
        <!--&lt;!&ndash;                <slot :msg="val" name="sort"></slot>&ndash;&gt;-->
        <!--&lt;!&ndash;            </template>&ndash;&gt;-->
        <!--        </List>-->

    </div>
</template>

<script>
  import List from './list.vue'

  export default {
    name: "index",
    props: {
      checkedAllVal: {
        type: Object,
        default: () => {
        }
      },
      tableData: {
        default: () => []
      },
      tableTitle: {
        default: () => []
      }
    },
    // inheritAttrs:false,
    components: {
      List
    },
    mounted() {
      this.clientWidth = document.getElementsByClassName('s-table')[0].clientWidth
    },
    computed: {
      width() {
        let len = this.tableTitle.length

        return this.clientWidth / len
      },
      checkedVal() {
        return this.checkedAllVal
      }
    },
    data() {
      return {
        clientWidth: 0,
      }
    },
    methods: {
      checkBoxCheck(key) {
        this.$emit('checkAll', {key: key, value: this.checkedVal[key]})
      },
      handleCurrentChange() {
      },
      getClick() {
      },
      handleSelectionChange() {
      }
    }
  }
</script>

<style scoped lang="scss">

    .w-25 {
        width: 25%;
    }

    .table-head {
        li {
            border-bottom: 1px solid #EBEEF5;
            border-right: 1px solid #EBEEF5;
            box-sizing: border-box;
            background-color: rgb(244, 244, 245);
            padding: 10px;
            font-weight: bold;

        }

        li:last-child {
            border-right: none
        }
    }

    li {
        div {
            box-sizing: border-box;
            border-bottom: 1px solid #EBEEF5;
            border-right: 1px solid #EBEEF5;
            padding: 10px;
        }
    }

    .table-tree {
        display: flex;
        width: 100%;

        li {
            flex: 1;

            div {
                border-bottom: 1px solid #EBEEF5;
                border-right: 1px solid #EBEEF5;
            }


        }


    }

    .table-tree:last-child {
        div:last-child {
            border-right: none;
        }
    }

    .s-table {
        width: 100%;

        font-size: 14px;
        color: #909399;
        border: 1px solid #EBEEF5;
        border-bottom: none;
        margin-bottom: 20px;
        margin-top: 20px;

    }

</style>
<style scoped lang="scss">
    li {
        div {
            box-sizing: border-box;
            border-bottom: 1px solid #EBEEF5;
            border-right: 1px solid #EBEEF5;
            padding: 10px;
        }
    }

    .table-tree {
        display: flex;
        width: 100%;

        li {
            flex: 1;

            div {
                border-bottom: 1px solid #EBEEF5;
                border-right: 1px solid #EBEEF5;
            }


        }


    }

    .table-tree:last-child {
        div:last-child {
            border-right: none;
        }
    }
</style>
