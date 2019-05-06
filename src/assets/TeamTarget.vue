<template>
  <div class="team-target">
    <p>Team target: {{ teamTarget() }}</p>
    <p>Progress: {{ teamProgress() + '%'}}</p>
    <div class="progress">
      <div  class="progress-bar" 
            role="progressbar" 
            style="width: 12%" 
            aria-valuenow="25" 
            aria-valuemin="0" 
            aria-valuemax="100">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['item','array'],
    data(){
      return {
        target : null,
      }
    },
    methods:{
      teamTarget(){
        let newArray =  this.array.filter((item) => item.team === this.item.name)
        return this.target = newArray.reduce((total,item) => total += item.target,0)
      },
      teamTotalMounth(){
        let newArray2  =  this.array.filter((item) => item.team === this.item.name)
        return this.totalMounth = newArray2.reduce((total,item) => total += item.totalMounth,0)
      },
      teamProgress(){
        let progress = (100*this.teamTotalMounth())/this.target
        return Math.floor(progress)
      },
    }
  }
</script>


<style>
  .team-target {
    width: 300px;
    height: 100%;;
    padding: 20px;
    transition: 1s;
  }
</style>




