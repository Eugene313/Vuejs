<template>
  <div class="team-target">
    <p>Team target: 100</p>
    <p>Progress: 20%</p>
    <div class="progress">
      <div  class="progress-bar" 
            role="progressbar" 
            style="width: 25%" 
            aria-valuenow="25" 
            aria-valuemin="0" 
            aria-valuemax="100">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
        
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




