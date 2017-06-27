<template>
  <aside class="aside">
    <el-col :span="3">
      <el-menu  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" v-bind:router="true" default-active="activity">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message">运营相关</i></template>
          <el-menu-item index="/activity">活动管理</el-menu-item>
          <el-menu-item index="/goods">商品管理</el-menu-item>
          <el-menu-item index="1-3">订单管理</el-menu-item>
          <el-menu-item index="1-4">晒单管理</el-menu-item>
          <el-menu-item index="1-5">大件晒单管理</el-menu-item>
          <el-menu-item index="1-6">系统通知管理</el-menu-item>
          <el-menu-item index="1-7">用户反馈管理</el-menu-item>
          <el-submenu index="1-8">
            <template slot="title"><i class="el-icon-message">预制数据管理</i></template>
            <el-menu-item index="1-8-1">Banner</el-menu-item>
            <el-menu-item index="1-8-2">Discovery</el-menu-item>
            <el-menu-item index="1-8-3">Loading</el-menu-item>
            <el-menu-item index="1-8-4">Shortcut</el-menu-item>
            <el-menu-item index="1-8-5">版本配置</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-9">活动分类管理</el-menu-item>
          <el-menu-item index="1-10">自有用户管理</el-menu-item>
        </el-submenu>
        <el-menu-item index="2"><i class="el-icon-menu"></i>数据统计相关</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>控制台相关</el-menu-item>
      </el-menu>
    </el-col>
  </aside>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    created () {

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
      }
    }
  }
</script>
<style>

</style>
