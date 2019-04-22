<template>
  <div id="add-depo">
    <h2>{{ msg }}<i class="far fa-money-bill-alt"></i></h2>
    <div class="input-wrap">
      <label for="username">Name</label>
      <input type="text" value="" id="username">
    </div>
    <div class="input-wrap">
      <label for="sum">Sum</label>
      <input type="number" v-model:value="sum" id="sum">
    </div>
    <div class="input-wrap">
      <button class="btn btn-primary">Add Deposit</button>
    </div>
    <p class="sum">$ {{ sum }}</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
	data(){
    return {
      msg : 'Add Deposit',
      sum : 0
    }
  }
  }
}
</script>

<style scoped>
  #add-depo {
    width: 49%;
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
  input {
    background: #000000;
    border: 1px solid grey;
    width: 100%;
    padding: 10px 10px;
    cursor: pointer;
    color: #ffffff;
    z-index: 3;
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
  .sum {
    font-size: 28px;
  }
  p {
    color: #ffffff;
  }
</style>


