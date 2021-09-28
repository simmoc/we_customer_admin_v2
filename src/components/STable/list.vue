<template>
    <ul>
        <li v-for="(small,index) in tableData" class="table-tree" :key="small+index"
            v-if="tableData||tableData.length>0">
            <div :style="{flex:`0 0 ${width}px`}">
                <el-checkbox></el-checkbox>
            <span class="pt12 pb12 display-block">{{small[tableTitle[level].prop]}}</span>

            </div>
            <div :style="{flex:`0 0 ${width}px`}" v-if="!small.children||small.children.length==0"
                 v-for="(item,sindex) in realList.slice(level+1)" :key="sindex">
                <span class="pt12 pb12 display-block">{{levelList.length==level+1&&item.parent?small[item.parent]:''}}</span>

            </div>

            <div :style="{flex:`0 0 ${width}px`}" v-if="!small.children||small.children.length==0">
                <slot name="edit" :msg="small"></slot>
            </div>
            <div :style="{flex:`0 0 ${width}px`}" v-if="!small.children||small.children.length==0">
                <slot name="sort" :msg="{...small,len:tableData.length}"></slot>

            </div>
            <list v-if="small.children&&small.children.length>0" :tableData="small.children" :width="width"
                  :level="level+1" :tableTitle="tableTitle">
                <template slot-scope="val" slot="edit">
                    <slot :msg="val.msg" name="edit"></slot>
                </template>
                <template slot-scope="val" slot="sort">
                    <slot :msg="val.msg" name="sort"></slot>
                </template>
            </list>
        </li>
    </ul>
</template>

<script>
  // import bus from "@/util/bus.js";

  export default {
    name: "list",
    props: {
      tableData: {
        type: Array,
        default: () => []
      },
      width: {
        type: Number,
        default: 0
      },
      level: {
        type: Number,
        default: 0
      },
      tableTitle: {
        type: Array,
        default: () => []
      },

    },
    data() {
      return {
        buttonList: [],
      }
    },
    computed: {
      realList() {
        let arr = []
        this.tableTitle.forEach((item) => {
          if (item.prop == 'button') {
            this.buttonList.push(item)
          } else {
            arr.push(item)
          }
        })
        return arr
      },
      levelList() {
        let arr = []
        this.tableTitle.forEach((item) => {
          if (item.prop != 'button' && !item.parent) {
            arr.push(item)
          }
        })
        return arr
      }

    },
    created() {

    },
    methods: {
      edit(obj) {
        // bus.$emit('edit', obj)

      },
      getSort(obj, sort_type) {
        bus.$emit('getSort', {...obj, sort_type})
      }
    }
  }
</script>

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
