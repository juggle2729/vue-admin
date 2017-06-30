<template>
  <div id="app">
    <Header></Header>
    <Aside></Aside>
    <!--<Activity></Activity>-->
    <router-view></router-view>
  </div>
</template>


<script>
  import Aside from './components/Aside.vue'
  import Header from './components/Header.vue'
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    created () {

    },
    components: {
      Aside,
      Header
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 60px;
  height: 100%;
}
header{
  position: fixed;
  height: 60px;
  left: 0;
  top: 0;
  line-height: 60px;
  padding: 0 30px;
}
</style>
