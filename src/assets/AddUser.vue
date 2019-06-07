<template>
  <div id="add-user">
    <h2>{{ title }}<i class="fas fa-user-plus"></i></h2>
    <div class="input-wrap">
      <label for="name">Name</label>
      <select v-model="userName" @change="selectUser">
        <option v-for="item in array" :key="item.id" :value="item.name">{{ item.name }}</option>
      </select>
    </div>
    <div class="input-wrap">
      <label for="desk">Desk</label>
      <input type="text" v-model="currentUser.desk" id="desk">
    </div>
    <div class="input-wrap">
      <label for="country">Country</label>
      <input type="text" v-model="currentUser.country" id="country">
    </div>
    <div class="input-wrap">
      <label for="target">Target</label>
      <input type="text" v-model.number="currentUser.target" id="target">
    </div>
    <div class="input-wrap">
      <label for="team">Team</label>
      <select type="text" v-model="currentUser.team" id="team">
        <option v-for="item in teams" :value="item.name" :key="item.id">{{ item.name }}</option>
      </select>
    </div>
    <div class="input-wrap">
      <button class="btn btn-primary" @click="updateUser"><i class="fas fa-plus"></i> Edit User</button>
    </div>
  </div>
</template>
<script>
export default {
  props : ['array','teams'],
	data(){
    return {
      title : 'Edit User',
      userName : '',
      currentUser : {}
    }
  },
  methods : {
    selectUser () {
      for (let i = 0; i < this.array.length; i++) {
        if (this.array[i].name === this.userName){
          this.currentUser = this.array[i];
        }
      } 
    },
    updateUser() {
      console.log(this.currentUser)
      delete this.currentUser._id
      fetch('http://da-api.qps.pp.ua/api/v1/users/'+this.currentUser.id,
        {
          headers: {
            'accept': 'application/json',
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' +  localStorage.getItem('token')
        },
          method: "POST",
          body: JSON.stringify(this.currentUser)
      })
    }
  }
}
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }
  #add-user {
    width: 30%;
    height: 400px;
    border: 1px solid #ffffff30;
    font-weight: 300;
    padding: 10px;
    margin-right: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  h2 {
    font-size: 18px;
    margin: 0;
    font-weight: 300;
  }
  i {
    padding-left: 10px;
    color: #ffffff;
    font-size: 20px;
  }
  .input-wrap {
    width: 70%;
    position: relative;
  }
  label {
    width: 100%;
    position: absolute;
    font-size: 12px;
    top: 11px;
    left: -47px;
    cursor: pointer;
    z-index: 1;
  }
  select {
    width: 100%;
    height: 45px;
    background: none;
    color: white;
  }
  input  {
    background: #000000;
    border: 1px solid grey;
    border-radius: 5px;
    width: 100%;
    padding: 10px 20px;
    cursor: pointer;
    color: #ffffff;
    z-index: 3;
  }
  button   {
    border: none;
    width: 100%;
    background: #3790fff2;
    padding: 13px 55px;
    color: #ffffff;
    cursor: pointer;
  }
  i {
    font-size: 15px;
  }
</style>


