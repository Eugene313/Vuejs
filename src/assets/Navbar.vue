<template>
  <div class="navbar">
    <p>Total Sum: $ {{ totalSumFun()}}</p>
    <p>Total Day: {{ totalDayFun() }}</p>
    <p>Total Mounth: {{ totalMounthFun() }}</p>
  </div>
</template>
<script>
export default {
  props : ['array'],
  data(){
    return {
      
    }
  },
  methods : {
    totalSumFun(){
      return this.array.reduce((total, item) => total += item.totalSum, 0);
    },
    totalDayFun(){
      return this.array.reduce((prev, next) => prev += next.totalDay, 0);
    },
    totalMounthFun(){
      return this.array.reduce((prev, next) => prev += next.totalMounth, 0);
    }
  }
}
</script>
<style>
  .navbar {
    width: 100%;
    background: #3790fff2;
    border-bottom: 1px solid #ffffff90;
    color: #ffffff;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 300;
  }
  p {
    margin: 0;
    padding: 0;
  }
</style>


