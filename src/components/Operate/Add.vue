<template>
  <section class="add">
    <el-col :span="21" class="blockmodel">
      <div class="header">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <router-link to="/activity/add">
            <el-form-item label="活动模板详情" class="txt1"></el-form-item>
          </router-link>
          <router-link to="/activity">
            <el-form-item label="活动模板管理" class="txt2"></el-form-item>
          </router-link>
          <el-form-item label="模板编辑" class="txt3"></el-form-item>
        </el-form>
      </div>
      <div class="form">
        <div class="argument">参数设置</div>
        <el-form ref="form" :model="form">
          <el-form-item label="商品活动名称：">
            <el-input v-model="form.name" placeholder="请输入活动名称..." style="width: 75%;"></el-input>
          </el-form-item>
          <el-form-item label="商品活动简称：">
            <el-input v-model="form.name" placeholder="请输入活动简称..." style="width: 75%;"></el-input>
          </el-form-item>
          <el-form-item label="商品活动描述：">
            <el-input type="textarea" v-model="form.desc" style="width: 75%;"></el-input>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>
<style>
  .header{
    padding: 5px  20px;
    min-height: 30px;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    text-align: left;
  }
  .form{
    margin: 25px 20px 50px 20px;
    border: 1px solid #e0e0e0;
    padding: 15px;
  }
  .argument{
    text-align: left;
    padding-left: 10px;
    border-bottom: 1px solid #e0e0e0;
    height: 40px;
    line-height: 40px;
    margin-bottom: 20px;
  }
</style>
