<template>
  <div>
    <div class="topBar" >
         <div class="barLeft"><span>校园教室</span></div>
          <div class="barRight">
            <div class="flex-item1"><span>首页</span></div>
            <div class="flex-item1"><span>卡塔学堂</span></div>
            <div class="flex-item1"><span>网易卡塔</span></div>
            <div class="flex-item2"><span>王媛媛</span></div>
          </div>
    </div>
    <div style="background-color: #112F4c"  class="sidebar">
      <ul style="color: white;margin-top: 20px" v-for="nav in navs">
        <!--<li  style="list-style-type:none;margin-right: auto;margin-left: auto" @click="fold(nav)">-->
        <li  class="topLi" @click="fold(nav)">
          <!--<div style="display:inline-block;margin-top:8px;margin-right:4px" v-bind:class="[nav.icon]"></div>-->
          <div style="display: inline-block;width: 130px"><span>{{nav.title}}</span><span v-if="nav.count">&#40{{nav.count}}&#41</span></div><button v-if="nav.button"  class="button btn btn-info"><span>{{nav.button}}</span></button>
        </li>
        <li v-if="nav.subs&&nav.show" v-for="sub in nav.subs" @click="goTo(sub)" class="subLi">
          <span>{{sub.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
  name: 'sideNav',
    computed:{
    navs(){return this.$store.state.navs}
    },
  data(){
    return{

    }
  },
 methods:{
   fold(nav){
     nav.show=!nav.show;
     console.log(nav.show)
     if(!nav.subs){
       this.$router.push({path:nav.url})
     }
   },
   goto(sub){
     this.$router.push({path:sub.url})
   }
 }
}
</script>
<style scoped>
.sidebar{
  width: 220px;
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 0;
  margin-top: 0;
  z-index: 1000;
  background-color: #22282e;
  color: white;
}
  .topLi{
    list-style-type:none;
    font-size:18px;
    width: 180px;
    clear: both;
    position: relative
  }
.topLi:hover{
  cursor: pointer;
}
  .subLi{
    margin-top: 10px;
    opacity: 0.6;
    font-size:14px;
    color:white;
    list-style-type:none;
    width: 180px;
    clear: both
  }
  .subLi:hover{
    opacity: 1;
    cursor:pointer;
  }
  .topBar{
    width: 100%;
height: 50px;
    position: fixed;
    left: 0;
    top:0;
    /*border: 1px solid red;*/
    z-index: 1000;
  }
  .barLeft{
    float: left;
    background-color: #4B9AFA;
    font-size: 22px;
    text-align: center;
    width: 220px;
    height: 50px;
    color: white;
    line-height: 50px;
  }
.barRight{
  display: flex;
  font-size: 16px;
  /*border: 1px solid red;*/
  background-color: white;
 padding-top:0px;

}
.flex-item1{
  margin-left: 20px;
  color: black;
  width: 75px;
  height: 30px;
  /*border: 1px solid red;*/
  line-height: 30px;
  text-align: center;
 margin-top: 25px;
  transform: translate(0,-50%);
  border-radius: 15px;
}
.flex-item1:hover{
color:#4493f1 ;
  background-color:#f0f9ff

}
.flex-item2{
  margin-right: 30px;
  margin-left: auto;
  color: black;
  line-height: 50px;
}
  .button{
  padding-left:3px;
    padding-top:0px;
    width:40px;
    height: 20px;
    position: absolute;
    right:10px;top:50%;
    transform: translate(0,-50%);
    line-height: 20px
  }
</style>
