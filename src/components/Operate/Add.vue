<template>
  <section class="add">
    <el-col :span="21" class="blockmodel">
      <div class="header1">
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
        <div class="argument">
           <span class="panel-icon"><i class="el-icon-setting"></i>
             参数设置
            </span>
        </div>
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
          <el-form-item label="对应商品：" style="padding-left: 28px;">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="relative">
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>黄金糕</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>狮子头</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>螺蛳粉</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>双皮奶</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>蚵仔煎</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>蚵仔煎</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-form-item>
          <el-form-item label="活动分类：" style="padding-left: 28px;" class="category1">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="relative">
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>黄金糕</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>狮子头</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>螺蛳粉</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>双皮奶</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>蚵仔煎</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>蚵仔煎</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-form-item>
          <el-form-item label="活动模式：" style="padding-left: 28px;" class="model">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="relative">
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>黄金糕</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>狮子头</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>螺蛳粉</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>双皮奶</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>蚵仔煎</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>蚵仔煎</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-form-item>
          <el-form-item label="购买单位：" style="padding-left: 28px;">
            <input type="number" value="4" class="company">
          </el-form-item>
          <el-form-item label="目标凑集次数：">
            <input type="number" value="100" class="company">
          </el-form-item>
          <el-form-item label="活动权重：" style="padding-left: 28px;">
            <input type="number" value="0" class="company">
          </el-form-item>
          <el-form-item label="货币单价：" style="padding-left: 28px;">
            <input type="number" value="1" class="company">
          </el-form-item>
          <el-form-item label="购买限制：" style="padding-left: 28px;">
            <input type="number" value="0" class="company">
          </el-form-item>
          <el-form-item label="活动当前期数：">
             <span>0</span>
          </el-form-item>
          <el-form-item label="活动状态：" style="padding-left: 28px;" class="model">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                待开始<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="relative">
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>待开始</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>进行中</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>已暂停</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-form-item>
          <el-form-item label="面向国家：" style="padding-left: 28px;" class="model">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                中国<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" class="relative">
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>中国</el-dropdown-item>
                <el-dropdown-item><el-radio class="radio" v-model="radio"></el-radio>越南</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-form-item>
        </el-form>
      </div>
      <el-form>
        <el-form-item label="封面管理："style="padding-left: 28px;">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture">
            <el-button size="small" type="primary">上传封面</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="图片管理：" style="padding-left: 28px;">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture">
            <el-button size="small" type="primary">上传图片</el-button>
          </el-upload>
        </el-form-item>

        <el-form-item label="图文详情管理：">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture">
            <el-button size="small" type="primary">上传图文详情</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
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
        },
        radio: '1'
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
  .header1{
    padding: 5px  20px;
    min-height: 30px;
    border-bottom: 1px solid #e0e0e0;
    border-top: 1px solid #e0e0e0;
    text-align: left;
    position: fixed;
    top: 60px;
    width: 100%;
    z-index: 999;
    background: #fafafa;
  }
  .form{
    margin: 100px 20px 50px 20px;
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
  .el-dropdown-link{
    border: 1px solid #e0e0e0;
    display: block;
    height: 30px;
    line-height: 30px;
  }
  .relative{
    max-height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .company{
    height: 30px;
    line-height: 30px;
    padding-left: 5px;
  }
  section{
    margin-left: 12.5%;
    width: 100%;
    height: 100%;
  }
</style>
