/* HTML for Vue*/
<script src="https://vuejs.org/js/vue.js"></script>


<div id="myID">
    <h1>Välj en burgare</h1>
    <div v-for="burger in menu">
   {{ burger.name }}

    <span v-if="burger.gluten" >
    contains gluten
    </span>
      <span v-if="burger.hazelnuts" >
    contains hazelnuts
    </span>
   </div>

-------

function menuItem(nm, cal, mo, gl, hz, img) {
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

let burger1 = new menuItem("Smoky burger", "500kCal","patty made from black beans and sweet potatoes",true, false, "");

let burger2 = new menuItem("California burger", "550kCal","patty made from carrots and quick oats", true, false, "");

let burger3 = new menuItem("Brooklyn burger", "600kCal","patty made from black beans", true, true, "");

let burger4 = new menuItem("Amazing burger", "600kCal","patty made from....", true, false, "");

let burger5 = new menuItem("Healthy burger", "450kCal","patty made from...", false, false, "");


var menu = [burger1, burger2, burger3, burger4, burger5];


const vm = new Vue({
  el: '#myID',
  data: {
  	menu: menu,
  }
})
