<template>
  <div id="app">
    <sideNav></sideNav>
    <router-view class="inner"></router-view>
  </div>
</template>
<script>
import sideNav from '@/components/nav'
export default {
  name: 'App',
  components:{
    sideNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
  .inner{
    /*position: fixed;*/
    /*overflow: scroll;*/
margin-top: 50px;
    margin-left: 220px;
   /*top: 50px;*/
   /*left: 220px;*/
  }
</style>
