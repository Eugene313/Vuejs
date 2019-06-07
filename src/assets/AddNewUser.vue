<template>
  <div id="add-new-user">
    <h2>{{ title }}</h2>
    <div class="input-wrap">
      <label >Name</label>
      <input type="text" v-model="newUser.name">
    </div>
    <div class="input-wrap">
      <label >Desk</label>
      <input type="text" v-model="newUser.desk">
    </div>
    <div class="input-wrap">
      <label >Country</label>
      <input type="text" v-model="newUser.country">
    </div>
    <div class="input-wrap">
      <label >Target</label>
      <input type="number" v-model.number="newUser.target">
    </div>
    <div class="input-wrap">
      <label >Team</label>
      <select name="" id="" v-model="newUser.team">
        <option v-for="item in teams" :key="item.id" :value="item.name">{{ item.name }}</option>
      </select>
    </div>
    <div class="input-wrap">
      <button class="btn btn-primary" @click="createUser"><i class="fas fa-plus"></i> Add User</button>
    </div>
  </div>
</template>
<script>
export default {
  props : ['array','teams'],
  name : 'addNewUser',
  data () {
    return {
      title : 'Add New User',
      newUser : {
        country: '',
        desk: '',
        id: null,
        name: '',
        target: null,
        team: '',
        totalDay: 0,
        totalMounth: 0,
        totalSum: 0
      }
    }
  },
  methods : {
    createUser () {
      console.log(this.array)
      fetch('http://da-api.qps.pp.ua/api/v1/users',
        {
          headers: {
            'accept': 'application/json',
            'content-Type': 'application/json',
            'Authorization': 'Bearer ' +  localStorage.getItem('token')
        },
          method: "POST",
          body: JSON.stringify(this.newUser)
      })
      .then( data => {
        if (data.status === 201) {
          this.array.push(this.newUser)
          console.log(this.array)
        }
      })
    }
  },
  beforeUpdate () {
    console.log(this.array[this.array.length - 1].id + 1);
    console.log(this.newUser.id)
    if (this.array.length > 1) {
      this.newUser.id = this.array[this.array.length - 1].id + 1
    } else {
      this.newUser.id = 1
    }
  }
}
</script>
<style scoped>
  #add-new-user {
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
  select {
    width: 100%;
    height: 45px;
    background: none;
    color: white;
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

