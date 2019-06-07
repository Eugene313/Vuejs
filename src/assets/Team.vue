<template>
  <div class="team">
    <div class="user-team" >
      <div class="user-team-wrap" >
        <i class="fas fa-plus-circle" @click="openTeam"></i>
      </div>
      <transition name="fade">
        <div class="add-team" v-show="addTeam">
          <label for="">Team Name</label>
          <input type="text">
          <label for="">Photo</label>
          <input type="file" class="photo">
          <button>Create</button>
        </div>
      </transition>
    </div>
    <div  class="user-team" 
          v-for="item in teams" 
          v-bind:key="item.id" 
          v-on:click="open(item.id)">

      <div class="user-team-wrap">
        <i class="fas fa-award"></i>

        <p>{{ item.name }}</p>

        <div class="img-wrap">
          <img  v-bind:src="item.img" 
                alt="">
        </div>
        <p>Total Day: {{ totalTeamDay(item.name) }}</p>
        <p>Total Mounth: {{ totalTeamMounth(item.name) }}</p>
        <p>Total Sum: ${{ totalTeamSum(item.name) }}</p>
      </div>
      <transition name="fade">
        <team-target v-show="item.v"
                     v-bind:item="item"
                     v-bind:array="array">
        </team-target>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props : ['array','teams'],
	data(){
    return {
      addTeam : false
    }
  },
  methods : {
    totalTeamSum(itemName){
      let teamArray = this.array.filter(function(item){
        return item.team === itemName
      })
      return teamArray.reduce((total, item) => total += item.totalSum, 0);
    },
    totalTeamDay(itemName){
      let teamArray = this.array.filter(function(item){
        return item.team === itemName
      })
      return teamArray.reduce((total, item) => total += item.totalDay, 0);
    },
    totalTeamMounth(itemName){
      let teamArray = this.array.filter(function(item){
        return item.team === itemName
      })
      return teamArray.reduce((total, item) => total += item.totalMounth, 0);
    },
    open(id){
      this.teams.forEach(element => {
        if (element.id !== id) {
          // element.v = false;
        } else {
          element.v = !element.v;
        }
      });
    },
    openTeam () {
      this.addTeam = !this.addTeam
    }
  }
}
</script>

<style scoped >
  .add-team {
    padding: 10px 0;
    width: 200px;
    height: 100%;
  }
  .team {
    height: 230px;
    display: flex;
    align-items: center;
    padding: 10px 2px;
    position: absolute;
    font-weight: 300;
  }
  .user-team {
    position: relative;
    box-shadow: -5px -5px 2px -6px rgba(255, 255, 255, 0.75);
    width: 100%;
    height: 200px;
    margin: 0 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transition: 0.3s;
  }
   .user-team:hover {
     box-shadow: none;
     color: white;
     background: #3791ff46;
     transform: scale(1.05);
     border-radius: 5px;
     cursor: pointer;
   }
   .user-team-wrap {
    width: 200px;
    height: 200px;
    position: relative;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: 0.3s;
   }
  .img-wrap {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
  }
  img {
    width: 100px;
  }
  p {
    margin: 0;
    font-size: 12px;
  }
  .fa-award {
    display: none;
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 28px;
  }
  .user-team:nth-child(2) i {
    display: inline;
    color: gold;
  }
  .user-team:nth-child(3) i {
    display: inline;
    color: silver;
  }
  .user-team:nth-child(4) i {
    display: inline;
    color: #e46d0082;
  }
  .fade-enter-active {
  transition: opacity .5s;
  }
  .fade-leave-active {
    transition: opacity .1s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .fa-plus-circle {
    font-size: 100px;
    color: #cccccc26;
  }
  input  {
    background: none;
    border: 1px solid grey;
    border-radius: 5px;
    width: 90%;
    padding: 0 20px;
    cursor: pointer;
    color: #ffffff;
    z-index: 3;
  }
  .photo {
    border: none;
    padding: 0;
    margin: 0 0 5px 0;
    background: none;
    font-size: 10px;
  }
  button {
    border: none;
    border-radius: 5px;
    background: none;
    background: #3790fff2;
    padding: 5px 15px;
    margin: 10px 0;
    color: white;
  }
</style>


