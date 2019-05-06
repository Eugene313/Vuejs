<template>
  <div id="app">
    <p> <i class="fas fa-users"></i> {{ msg }} </p>
    <div class="table-wrap">
      <user-table 
          :array="array"
        >
        </user-table>
      <navbar 
        :array="array"
      >
      </navbar>
      <div class="team-wrap">
        <team 
          :array="array"
        >
        </team>
      </div>
    </div>
    <div class="navbar-wrap" >
      <div class="form-wrap">
        <add-user></add-user>
        <add-depo
          :array="array"
        >
        </add-depo>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Users Dashboard',
        array : [
          {name:'Maxim',desk:'RU',country : 'Ukraine',target : 30,totalDay:0,totalMounth:4,totalSum:1000,team : 'team1'},
          {name:'Eugene',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:3,totalSum:750,team : 'team2'},
          {name:'Oleg',desk:'RU',country : 'Ukraine',target : 10,totalDay:0,totalMounth:2,totalSum:500,team : 'team3'},
          {name:'Felix',desk:'RU',country : 'Ukraine',target : 5,totalDay:0,totalMounth:1,totalSum:250,team : 'team4'},
          {name:'Markus',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:1,totalSum:250,team : 'team1'},
          {name:'Iren',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:1,totalSum:250,team : 'team2'},
          {name:'Katya',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:1,totalSum:250,team : 'team3'},
          {name:'Anna',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:1,totalSum:250,team : 'team4'},
          {name:'Sergey',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:1,totalSum:250,team : 'team1'},
          {name:'Bender',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:1,totalSum:250,team : 'team2'},
          {name:'Vladimer',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:1,totalSum:250,team : 'team3'},
          {name:'Kostya',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:1,totalSum:250,team : 'team4'},
        ]
      }
    }
  }
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:100i,300,300i,400');
* {
  box-sizing: border-box;
}
#app {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
  padding: 10px;
}
p {
  border: 1px solid #ffffff30;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 22px;
  margin: 0;
  padding: 5px 0;
}
.table-wrap {
  width: 100%;
}
.team-wrap {
  height: 240px;
  margin: 10px 0;
  border: 1px solid #ffffff20;
  position: relative;
  overflow: scroll;
}
.navbar-wrap {
  width: 100%;
  padding: 10px;
}
.form-wrap {
  display: flex;
  justify-content:flex-start;
  margin-top: 18px;
}
</style>
