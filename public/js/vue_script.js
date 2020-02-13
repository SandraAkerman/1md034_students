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
    details: {x: 0, y: 0},
    counter: 0,

  },

  methods: {
    markDone: function() {
      console.log(this.checkedBurger);
    },

    getNext: function() {
      /* This function returns the next available key (order number) in
      * the orders object, it works under the assumptions that all keys
      * are integers.
      let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
      return Math.max(last, next);
    }, 0); */

    return ++this.counter ;
  },

  addOrder: function() {
    /* When you click in the map, a click event object is sent as parameter
    * to the function designated in v-on:click (i.e. this one).
    * The click event object con            <div id="dots" v-on:click="displayOrder">tains among other things different
    * coordinates that we need when calculating where in the map the click
    * actually happened. */

    socket.emit('addOrder', {
      orderId: this.getNext(),
      details: this.details,
      orderItems: this.checkedBurger,
      personalInfo: {
        name: this.name,
        email: this.email,
        payment: this.payment,
        gender: this.gender,
      }
    });

  },
  displayOrder: function(event) {
    /* When you click in the map, a click event object is sent as parameter
    * to the function designated in v-on:click (i.e. this one).
    * The click event object contains among other things different
    * coordinates that we need when calculating where in the map the click
    * actually happened. */
    let offset = {
      x: event.currentTarget.getBoundingClientRect().left,
      y: event.currentTarget.getBoundingClientRect().top,
    };

    this.details = {
      x: event.clientX - 10 - offset.x,
      y: event.clientY - 10 - offset.y,
    };
  },
},
});
