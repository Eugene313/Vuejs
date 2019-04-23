import Vue from 'vue'

import App from './assets/App.vue'
import AddDepo from './assets/AddDepo.vue'
import AddUser from './assets/AddUser.vue'
import EditUser from './assets/EditUser.vue'
import Navbar from './assets/Navbar.vue'
import Team from './assets/Team.vue'
import UserTable from './assets/UserTable.vue'
import TeamTarget from './assets/TeamTarget.vue'


Vue.component('AddDepo', AddDepo);
Vue.component('AddUser', AddUser);
Vue.component('EditUser', EditUser);
Vue.component('Navbar', Navbar);
Vue.component('Team', Team);
Vue.component('UserTable', UserTable);
Vue.component('TeamTarget', TeamTarget);



new Vue({
  el: '#app',
  render: h => h(App)
})
