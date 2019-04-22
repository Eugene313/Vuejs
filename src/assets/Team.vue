<template>
  <div class="team">
    <div class="user-team"  v-for="item in teams">
      <i class="fas fa-award"></i>
      <p>{{ item.name }}</p>
      <div class="img-wrap">
        <img v-bind:src="item.img" alt="">
      </div>
      <p>Total Day: 0</p>
      <p>Total Mounth: 0</p>
      <p>Total Sum: $0</p>
    </div>
  </div>
</template>



<script>
export default {
	data(){
    return {
      teams : [
        {name : 'team1',img : './dist/img/team1.png',target : 0},
        {name : 'team2',img : './dist/img/team2.png',target : 0},
        {name : 'team3',img:'./dist/img/team3.png',target : 0},
        {name : 'team4',img:'./dist/img/team4.png',target : 0},
        ],
      img : './img/avatar.png',
      name : 'team',
      target : 0
    }
  },
  methods : {
    addTeam(){
      this.team.push('team')
    }
  }
}
</script>



<style scoped >
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
    width: 200px;
    height: 200px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: 0.3s;
  }
   .user-team:hover {
     color: white;
     background: #3790fff2;
     transform: scale(1.1);
     border-radius: 5px;
     cursor: pointer;
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
  .user-team:nth-child(1) i {
    display: inline;
    color: gold;
  }
  .user-team:nth-child(2) i {
    display: inline;
    color: silver;
  }
  .user-team:nth-child(3) i {
    display: inline;
    color: #e46d0082;
  }
</style>


