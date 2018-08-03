<template>
  <div class="hello">
  <div class="head">已结束任务</div>
    <div class="task" v-for="task in tasks">
      <div>
        <div style="margin-bottom: 20px"> <span style="margin-right: 9px">任务名称：</span><span>{{task.name}}</span></div>
        <div> <span style="margin-right: 9px">任务来源：</span><span>{{task.sourcePlace}}</span>&nbsp&nbsp&nbsp<span>{{task.sourceDetail}}</span></div>
      </div>
      <div style="margin-left: 200px">
        <div style="margin-bottom: 20px"> <span style="margin-right: 9px">任务类型：</span><span class="typeDetail">{{task.type}}</span></div>
        <div> <span style="margin-right: 9px">作品要求提交数量：</span><span>{{task.submitted}}</span>&#047<span>{{task.demand}}</span>
          <button v-if="task.completed==0" class="status btn btn-success">未完成</button>
          <button v-if="task.completed==1" class="status btn btn-default">已完成</button>
        </div>
      </div>
      <button class="detail btn btn-info">任务详情</button>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'endTask',
    computed:{
      tasks(){
        return this.$store.state.tasks
      }
    },
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    border: 1px solid transparent;
    width: 85%;

    background-color:#f1f2f6;
    padding-left:20px ;

  }
  .head{
    font-family: PingFangSC-Regular;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .task{
    margin-bottom: 20px;
    background-color: white;
    padding: 15px;
    margin-right:20px ;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    display: flex;
    position:relative;

  }
  .status{
    width: 43px;
    height:20px;
    font-size: 12px;
    padding-top: 0px;
    padding-left: 0px;
    margin-top: -3px;
  }
.detail{
width: 100px;
  height: 32px;
  padding-top: 0px;
  line-height: 32px;
  position: absolute;
  top:50%;
  transform: translate(0,-50%);
  right: 30px;
}
</style>
