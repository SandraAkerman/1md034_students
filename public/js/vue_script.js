/*function menuItem(nm, cal, mo, gl, hz, img) {
  this.name = nm;
  this.kcal = cal;
  this.madeOf = mo;
  this.gluten = gl;
  this.hazelnuts = hz
  this.imagePath = img;
  this.nameAndKcal = function(){
    return this.name + ' ' + this.kcal;
};
}

let burger1 = new menuItem("Smoky burger", "500kCal","patty made from black beans and sweet potatoes",true, false, "https://www.sainsburysmagazine.co.uk/uploads/media/675x882/09/9289-Vegan-burger.jpg?v=1-0");

let burger2 = new menuItem("California burger", "550kCal","patty made from carrots and quick oats", true, false, "https://www.darngoodveggies.com/wp-content/uploads/2016/04/IMG_5050.jpg");

let burger3 = new menuItem("Brooklyn burger", "600kCal","patty made from black beans", true, true, "https://elavegan.com/wp-content/uploads/2019/09/Vegan-burger-with-Awesome-burger-patty-veggies-and-homemade-cheese.jpg");

let burger4 = new menuItem("Amazing burger", "600kCal","patty made from carrots, corn and beetroot", true, false, "https://elavegan.com/wp-content/uploads/2019/09/Vegan-burger-with-Awesome-burger-patty-veggies-and-homemade-cheese.jpg");

let burger5 = new menuItem("Healthy burger", "450kCal","patty made from oats and chickpeas", false, false, "https://elavegan.com/wp-content/uploads/2019/09/Vegan-burger-with-Awesome-burger-patty-veggies-and-homemade-cheese.jpg");


var menu = [burger1, burger2, burger3, burger4, burger5];
*/



/* jslint es6:true, indent: 2 */
/* global Vue, io */
/* exported vm */
'use strict';
const socket = io();

/* eslint-disable-next-line no-unused-vars */
const vm = new Vue({
  el: '#sectionwrapper',
  data: {
    menu: menu,
    name: "",
    email: "",
    payment: "",
    gender: "",
    checkedBurger:[],
    orders: {},
  },
  created: function() {
    /* When the page is loaded, get the current orders stored on the server.
     * (the server's code is in app.js) */
    socket.on('initialize', function(data) {
      this.orders = data.orders;
    }.bind(this));

    /* Whenever an addOrder is emitted by a client (every open map.html is
     * a client), the server responds with a currentQueue message (this is
     * defined in app.js). The message's data payload is the entire updated
     * order object. Here we define what the client should do with it.
     * Spoiler: We replace the current local order object with the new one. */
    socket.on('currentQueue', function(data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: event.clientX - 10 - offset.x,
          y: event.clientY - 10 - offset.y,
        },
        orderItems: ['Beans', 'Curry'],
      });
    },
  },
});


/*
const bt = new Vue({
    el: '#sectionwrapper',
    data: {
      menu: menu,
      name: "",
      email: "",
      payment: "",
      gender: "",
      checkedBurger:[],
    },
});
*/
