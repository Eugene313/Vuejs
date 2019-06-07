<template>
  <div id="app">
    <p @click="post"> <i class="fas fa-users"></i> {{ msg }}</p>
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
          :teams="teams"
        >
        </team>
      </div>
    </div>
    <div class="navbar-wrap" >
      <div class="form-wrap">
        <add-user :array="array" :teams="teams"></add-user>
        <add-new-user :array="array" :teams="teams"></add-new-user>
        <add-depo
          :array="array"
        >
        </add-depo>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Users Dashboard',
        array : [],
        teams : [],
        ipData : ''
      }
    },
    methods : {
      post(){
        axios.get('https://freegeoip.app/json/').then((response) => {
          this.ipData = response.data
          console.log(response.data)
        })
      }
    },
    created(){
      fetch("http://da-api.qps.pp.ua/api/v1/auth",
        {
          headers: {
            'accept': 'application/json',
            'content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({'email': 'admin@user1.com', 'password': '1wsx2qaz'})
        })
      .then((data) => data.json()).then(data => localStorage.setItem('token', data.data.token))
    },
    beforeMount(){
      axios.get("http://da-api.qps.pp.ua/api/v1/users",
        {
          headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' +  localStorage.getItem('token')
          }
        })
      .then(response => {
        this.array = response.data
        })
      axios.get("http://da-api.qps.pp.ua/api/v1/teams",
        {
          headers: {
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' +  localStorage.getItem('token')
          }
        })
      .then(response => {
        this.teams = response.data
        })
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
