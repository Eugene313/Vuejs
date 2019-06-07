<template>
  <div class="team-target">
    <p>Total Users: {{ totalTeamUsers() }}</p>
    <p>Team target: {{ teamTarget() }}</p>
    <p>Progress: {{ teamProgress() + '%' || 0 + '%'}}</p>
    <div class="progress">
      <div  class="progress-bar" 
            role="progressbar" 
            aria-valuenow="25" 
            aria-valuemin="0" 
            aria-valuemax="100"
            v-bind:style="procent">
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
        procent: null 
      }
    },
    methods:{
      teamTarget(){
        let newArray =  this.array.filter(item => item.team === this.item.name);
        return this.target = newArray.reduce((total,item) => total += item.target,0);
      },
      teamTotalMounth(){
        let newArray2  =  this.array.filter(item => item.team === this.item.name);
        return this.totalMounth = newArray2.reduce((total,item) => total += item.totalMounth,0);
      },
      teamProgress(){
        let progress = (100*this.teamTotalMounth())/this.target;
        let percents = Math.floor(progress);
        this.procent = 'width:' + percents + '%';
        return percents;
      },
      totalTeamUsers(){
        let totalTeam = this.array.filter(item => item.team === this.item.name)
        return totalTeam.length
      }
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




