<template>
  <div id="add-depo">
    <h2>{{ msg }}<i class="far fa-money-bill-alt"></i></h2>
    <div class="input-wrap">
      <label for="username">Name</label>
      <select name="" id="username"
        v-model:value="value"
        v-bind:class="{
          'valid' : value !== 'selectuser'
        }"
      >
        <option value="selectuser">Select User</option>
        <option 
            v-bind:value="item.name"
            v-for="item in array"
          >
          {{ item.name }}
        </option>
      </select>
    </div>
    <div class="input-wrap">
      <label for="sum">Sum</label>
      <input type="number" maxlength="5"
        v-model:value="sum" id="sum"
        v-bind:class="{
          'valid' : sum >=250
        }"
      >
    </div>
    <div class="input-wrap">
      <button class="btn btn-primary" 
          v-on:click="addDeposit"
          v-bind:class="{
            'disabled' : 250 > sum || value === 'selectuser'
            }"
        >
        <i class="fas fa-plus"></i> Add Deposit</button>
    </div>
    <p class="sum">$ {{ sum }}</p>
    <p>{{ msg }}</p>
  </div>
</template>






<script>
  export default {
    props : ['array'],
    data(){
      return {
        msg : 'Add Deposit',
        sum : 0,
        value : 'selectuser'
      }
    },
    methods : {
      addDeposit(){
        const userName = document.getElementById('username')
        const sum = document.getElementById('sum')
        if(this.value !== 'selectuser'){
          if(this.sum >= 250){
            this.sum = 0
            this.value = 'selectuser'; 
            this.array.forEach(function(item){
              if(item.name === userName.value){
                item.totalMounth++
                item.totalDay++
                item.totalSum += +sum.value
              }
            })
          }
        }
      }
    }
  }
</script>






<style scoped>
  #add-depo {
    width: 30%;
    height: 400px;
    border: 1px solid #ffffff30;
    font-weight: 300;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    font-size: 18px;
    margin: 10px;
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
    padding-bottom: 20px;
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
  input,select {
    background: #000000;
    border: 1px solid grey;
    border-radius: 5px;
    width: 100%;
    padding: 10px 10px;
    cursor: pointer;
    color: #ffffff;
    outline: none;
    z-index: 3;
  }
  select {
    height: 45px;
    border-radius: 0px;
  }
  button {
    border: none;
    width: 100%;
    /* width: 220px; */
    background: #3790fff2;
    padding: 13px 10px;
    color: #ffffff;
    cursor: pointer;
  }
  button i {
    font-size: 15px;
  }
  .sum {
    font-size: 28px;
  }
  p {
    color: #ffffff;
  }
  .valid {
    border: 2px solid #009c00e0;
    position: relative;
  }
  .invalid {
    border: 1px solid red;
  }
</style>


