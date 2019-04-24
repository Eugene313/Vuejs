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
<style scoped>
  .navbar {
    width: 1400px;
    border: 1px solid #ffffff40;
    color: #ffffff;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 300;
    padding: 0;
  }
  p {
    width: 33.3%;
    height: 100%;
    margin: 0;
    padding-top: 10px;
    text-align: center;
    transition: 0.5s;
  }
  p:first-child {
    background: #3790ff82;
  }
  p:nth-child(2){
    background: #3790ff42;
  }
  p:nth-child(3){
    background: #3790ff21;
  }
  p:hover {
    background: rgb(49, 114, 255);
    border-radius: 5px;
    transform: scale(1.03);
    cursor: pointer;
  }
</style>


