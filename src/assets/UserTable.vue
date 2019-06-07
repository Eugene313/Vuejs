<template>
  <div id="user-table">
      <table  cellspacing="0" 
              class="headline">
        <tbody>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Desk</td>
            <td>Country</td>
            <td>Target</td>
            <td>Day</td>
            <td>Month</td>
            <td>Sum</td>
            <td>Team</td>
          </tr>
        </tbody>
      </table>
      <div class="wrap">
        <table class="users" cellspacing="0">
            <transition-group name="flip-list" tag="tbody">
              <tr v-for="(item,index) in array" 
                  v-bind:key="item.id"
                  v-bind:array="arraySort">
                <td>
                  <span>
                    {{ (index + 1) + '.' }}
                    <i class="fas fa-trophy"></i>
                  </span>
                </td>
                <td>{{ item.name }}</td>
                <td>{{ item.desk }}</td>
                <td>{{ item.country }}</td>
                <td>{{ item.target }}</td>
                <td>{{ item.totalDay }}</td>
                <td>{{ item.totalMounth }}</td>
                <td>{{ ' $' + item.totalSum }}</td>
                <td>{{ item.team }}</td>
              </tr>
              </transition-group>
        </table>
      </div>
  </div>
</template>
<script>
export default {
  props : ['array'],
  data(){
    return {
      name : 'UserTable',
    }
  },
  computed : {
      arraySort(){
        return this.array = this.array.sort((a,b) => b.totalDay - a.totalDay)
      }
  },
}
</script>
<style scoped>
  .flip-list-move {
    transition: transform 0.5s;
  }
  #user-table {
    background: #00000090;
    max-width: 1400px;
    border: 1px solid #ffffff50;
    margin: 10px 0;
  }
  .headline {
    width: 100%;
    text-align: center;
    background: #000000;
  }
  .wrap {
    height: 500px;
    overflow: scroll;
  }
  .users {
    width: 100%;
    text-align: center;
    max-height: 500px;
    overflow: hidden;
    font-weight: 300;
  }
  tr {
    background: #0040881a;
    border-bottom: 1px solid #ffffff50;
  }
  td {
    position: relative;
    width: 100px;
    height: 50px;
  }
  .users tr:first-child {
    background: #3790ff82;
  }
   .users tr:nth-child(2){
     background: #3790ff42;
   }
   .users tr:nth-child(3){
     background: #3790ff21;
   }
  i {
    position: absolute;
    display: none;
  }
  .users tr:first-child td i {
    display: inline;
    top: 32%;
    right: 0;
    color: gold;
  }
  .users tr:nth-child(2) td i {
    display: inline;
    top: 32%;
    right: 0;
    color: silver;
  }
  .users tr:nth-child(3) td i {
    display: inline;
    top: 32%;
    right: 0;
    color: rgb(180, 102, 0);
  }
  .users tr:hover {
    background: #840000;
    cursor:pointer;
  }
</style>


