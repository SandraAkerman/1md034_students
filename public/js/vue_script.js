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

const vm = new Vue({
  el: '#allburgers',
  data: {
  	menu: menu,
  }
})
