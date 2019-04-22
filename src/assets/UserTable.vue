<template>
  <div id="user-table">
    <table class="users" cellspacing="0">
      <tbody>
        <tr>
          <td>#</td>
          <td>Name</td>
          <td>Desk</td>
          <td>Country</td>
          <td>Target</td>
          <td>Total Day</td>
          <td>Total Mounth</td>
          <td>Total Sum</td>
          <td>Team</td>
        </tr>
        <tr v-for="(item, key ) in array">
          <td><i class="fas fa-trophy"></i>{{ (key + 1) + '.' }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.desk }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.target }}</td>
          <td>{{ item.totalDay }}</td>
          <td>{{ item.totalMounth }}</td>
          <td>{{ ' $' + item.totalSum }}</td>
          <td>{{ item.team }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name : 'UserTable',
  data(){
    return {
      array : [
        {name:'Maxim',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team1'},
        {name:'Eugene',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
        {name:'Oleg',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team1'},
        {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
        {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
        {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
        {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
        {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
        {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
        {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
        {name:'Felix',desk:'RU',country : 'Ukraine',target : 20,totalDay:0,totalMounth:0,totalSum:0,team : 'team2'},
      ]
    }
  }
}
</script>
<style>
  #user-table{
    height: 542px;
    margin: 10px;
    border: 1px solid #ffffff20;
    overflow: scroll;
  }
  .users {
    width: 100%;
    border: none;
    padding: 0;
    font-weight: 300;
  }
  .users tr {
    transition: 0.2s;
  }
  .users tr i{
    display: none;
  }
  .users tr:hover {
    background: #98cbff;
    cursor: pointer;
    color: white;
  }
  .users tr:first-child{
    background: #3790fff2;
    color: white;
  }
  .users tr:first-child:hover {
    transform: scale(1)
  }
  .users tr:nth-child(2){
    background: #3790ff82;
    position: relative;
  }
  .users tr:nth-child(3){
    background: #3790ff42;
  }
  .users tr:nth-child(4){
    background: #3790ff21;
  }
  .users tr:nth-child(2) i {
    position: absolute;
    left: 50px;
    display: inline;
    color: gold;
  }
  .users tr:nth-child(3) i {
    position: absolute;
    left: 50px;
    display: inline;
    color: silver;
  }
  .users tr:nth-child(4) i {
    position: absolute;
    left: 50px;
    display: inline;
    color: #e46d0082;
  }
  .users td {
    position: relative;
    width: 100px;
    height: 50px;
    margin: 0;
    text-align: center;
    padding: 5px;
    margin-bottom: 20px;
    border-bottom: 1px solid #d2d2d2;
}
</style>


