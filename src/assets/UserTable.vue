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
            <td>Mounth</td>
            <td>Sum</td>
            <td>Team</td>
          </tr>
        </tbody>
      </table>
      <div class="wrap">
        <table class="users" cellspacing="0">
          <tbody style="position:relative;padding-top:50px;">
              <tr v-for="(item, key ) in array" 
                  v-bind:key="key">
                <td>
                  <span>
                    {{ (key + 1) + '.' }}
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
          </tbody>
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
  }
}
</script>
<style scoped>
  #user-table {
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
    right: 0;
    color: gold;
  }
  .users tr:nth-child(2) td i {
    display: inline;
    right: 0;
    color: silver;
  }
  .users tr:nth-child(3) td i {
    display: inline;
    right: 0;
    color: rgb(180, 102, 0);
  }
  .users tr:hover {
    background: #840000;
    cursor:pointer;
  }
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
</style>


