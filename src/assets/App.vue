<template>
  <div id="app">
    <p> {{ msg }} </p>
    <div class="table-wrap">
      <user-table 
          :array="array"
        >
        </user-table>
      <div class="team-wrap">
        <team 
          :array="array"
        >
        </team>
      </div>
    </div>
    <div class="navbar-wrap" >
      <navbar 
        :array="array"
      >
      </navbar>
      <div class="form-wrap">
        <add-user></add-user>
        <add-depo></add-depo>
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
          {name:'Maxim',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:4,totalSum:1000,team : 'team1'},
          {name:'Eugene',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:3,totalSum:750,team : 'team2'},
          {name:'Oleg',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:2,totalSum:500,team : 'team3'},
          {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:1,totalSum:250,team : 'team4'},
          {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
          {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
          {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
          {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
          {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
          {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team3'},
          {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team3'},
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
  width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
  padding: 10px;
}
p {
  background: #3790fff2;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 22px;
  margin: 0;
}
.table-wrap {
  width: 50%;
}
.team-wrap {
  height: 230px;
  margin: 10px;
  border: 1px solid #ffffff20;
  position: relative;
  overflow: scroll;
}
.navbar-wrap {
  width: 50%;
  padding: 10px;
}
.form-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
}
</style>
