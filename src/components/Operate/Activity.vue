<template>
    <section class="activity">
      <el-col :span="21">
        <div class="header">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="活动模块管理" style="float: left"></el-form-item>
            <router-link to="/activity/add">
              <el-form-item label="新建活动模板" style="float: right"></el-form-item>
            </router-link>
          </el-form>
        </div>
        <div class="table">
          <el-table
            ref="multipleTable"
            :data="tableData3"
            border
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              prop="id"
              label="ID"
              sortable
              width="80">
            </el-table-column>
            <el-table-column
              label="名称"
              sortable
              width="240">
            </el-table-column>
            <el-table-column
              prop="name"
              label="封面"
              width="80">
            </el-table-column>
            <el-table-column
              prop="address"
              label="分类"
              width="80">
            </el-table-column>
            <el-table-column
              label="类型	"
              width="80">
            </el-table-column>
            <el-table-column
              label="目标数量"
              sortable
              width="120">
            </el-table-column>
            <el-table-column
              label="当前期数"
              width="100">
            </el-table-column>
            <el-table-column
              label="状态"
              width="100">
            </el-table-column>
            <el-table-column
              label="权重"
              sortable
              width="100">
            </el-table-column>
            <el-table-column
              label="最后更新时间"
              width="180">
            </el-table-column>
            <el-table-column
              label="开始时间"
              width="180">
            </el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button
                  size="small"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="sizePage"
          layout="total, sizes, prev, pager, next, jumper"
          :total="40">
        </el-pagination>
      </el-col>
    </section>
</template>

<script>

  export default {
    data () {
      return {
        url: '../../../static/vuetable.json',
        sizePage: 20,
        currentPage: 1,
        tableData3: [],
        multipleSelection: []
      }
    },
    created () {
      this.getData()
    },
    methods: {
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handleEdit (index, row) {
        console.log(index, row)
      },
      handleDelete (index, row) {
        console.log(index, row)
      },
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      handleSizeChange (val) {
        this.sizePage = val
      },
      handleCurrentChange (val) {
        this.currentPage = val
        this.getData()
      },
      getData () {
        let self = this
        self.$axios.get(self.url, {page: self.currentPage}).then((res) => {
          self.tableData3 = res.data.list
        })
      }
    }
  }
</script>

<style>
  .header{
    padding: 10px 20px;
    min-height: 30px;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
  }
  .table{
    padding: 25px 20px 50px 20px;
  }
</style>
