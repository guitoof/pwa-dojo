// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueFire from 'vuefire';
import firebase from 'firebase';
import 'vue-material/dist/vue-material.css';
import App from './App';
import router from './router';

Vue.use(VueFire);
Vue.use(VueMaterial);
Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyCEq39n_xZW0QtRIX4_Gfbm0fpB21eTjq0',
  authDomain: 'pwadojo.firebaseapp.com',
  databaseURL: 'https://pwadojo.firebaseio.com',
  projectId: 'pwadojo',
  storageBucket: 'pwadojo.appspot.com',
  messagingSenderId: '445295830164',
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  firebase: {
    catList: db.ref('pictures'),
  },
});
