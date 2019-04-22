<template>
  <div id="add-user">
    <h2>{{ title }}<i class="fas fa-user-plus"></i></h2>
    <div class="input-wrap">
      <label for="name">Name</label>
      <input type="text" value="" id="name">
    </div>
    <div class="input-wrap">
      <label for="desk">Desk</label>
      <input type="text" value="" id="desk">
    </div>
    <div class="input-wrap">
      <label for="country">Country</label>
      <input type="text" value="" id="country">
    </div>
    <div class="input-wrap">
      <label for="target">Target</label>
      <input type="text" value="" id="target">
    </div>
    <div class="input-wrap">
      <label for="team">Team</label>
      <input type="text" value="" id="team">
    </div>
    <div class="input-wrap">
      <button>Add User</button>
    </div>
  </div>
</template>
<script>
export default {
	data(){
    return {
      title : 'Add User'
    }
  }
}
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }
  #add-user {
    width: 49%;
    height: 350px;
    border: 1px solid #ffffff30;
    font-weight: 300;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  h2 {
    margin: 0;
    font-weight: 300;
  }
  i {
    padding-left: 10px;
    color: #00000090;
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
  input  {
    background: #000000;
    border: 1px solid grey;
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
    padding: 13px 65px;
    color: #ffffff;
    cursor: pointer;
  }
</style>


