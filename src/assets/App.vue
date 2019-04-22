<template>
  <div id="app">
    <p>{{ msg }}</p>
    <div class="table-wrap">
      <user-table></user-table>
      <div class="team-wrap">
        <team></team>
      </div>
    </div>
    <div class="navbar-wrap">
      <navbar></navbar>
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
      msg: 'Users Dashboard'
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
  border: 1px solid #00000020;
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
