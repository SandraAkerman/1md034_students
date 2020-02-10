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

let burger1 = new menuItem("Smoky burger", "500kCal","patty made from black beans and sweet potatoes",true, false, "https://www.sainsburysmagazine.co.uk/uploads/media/675x882/09/9289-Vegan-burger.jpg?v=1-0");

let burger2 = new menuItem("California burger", "550kCal","patty made from carrots and quick oats", true, false, "https://www.darngoodveggies.com/wp-content/uploads/2016/04/IMG_5050.jpg");

let burger3 = new menuItem("Brooklyn burger", "600kCal","patty made from black beans", true, true, "https://elavegan.com/wp-content/uploads/2019/09/Vegan-burger-with-Awesome-burger-patty-veggies-and-homemade-cheese.jpg");

let burger4 = new menuItem("Amazing burger", "600kCal","patty made from....", true, false, "");

let burger5 = new menuItem("Healthy burger", "450kCal","patty made from...", false, false, "");



var menu = [burger1, burger2, burger3, burger4, burger5];



let i = 0;
for (i; i < menu.length; i++) {

  var container = document.createElement("div");
  var header = document.createElement("h3");
  var img = document.createElement("img");
  var burger = document.createElement("ul");
  var madeof = document.createElement("li");
  var kCal = document.createElement("li");
  var gluten = document.createElement("li");
  var hazelnuts = document.createElement("li");

	header.innerHTML = menu[i].name;
  img.src  = menu[i].imagePath;
  img.height = "400";

  madeof.innerHTML = menu[i].madeOf;
  burger.appendChild(madeof);

  kCal.innerHTML = menu[i].kcal;
  burger.appendChild(kCal);

  if(menu[i].gluten) {
    gl = "contains gluten";
    gluten.innerHTML = gl.bold();
		burger.appendChild(gluten);
    }

  if(menu[i].hazelnuts){
    hz = "contains hazelnuts";
    hazelnuts.innerHTML = hz.bold();
    burger.appendChild(hazelnuts);
     }

  container.appendChild(header);
  container.appendChild(img);
  container.appendChild(burger);
	document.getElementById("allburgers").appendChild(container);
;
}



/*
var burgerOne = document.createElement("p");
burgerOne.innerHTML = burger1.nameAndKcal();
document.getElementById("myID").appendChild(burgerOne);

var burgerTwo = document.createElement("p");
burgerTwo.innerHTML = burger2.nameAndKcal();
document.getElementById("myID").appendChild(burgerTwo);

var burgerThree = document.createElement("p");
burgerThree.innerHTML= burger3.nameAndKcal();
document.getElementById("myID").appendChild(burgerThree);

var burgerFour = document.createElement("p");
burgerFour.innerHTML = burger4.nameAndKcal();
document.getElementById("myID").appendChild(burgerFour);
          <div id="BLUBB">
          sdkfksdfkjfl
            <div>
var burgerFive = document.createElement("p");
burgerFive.innerHTML = burger5.nameAndKcal();
document.getElementById("myID").appendChild(burgerFive);
*/

/*
https://www.sainsburysmagazine.co.uk/uploads/media/675x882/09/9289-Vegan-burger.jpg?v=1-0
https://www.darngoodveggies.com/wp-content/uploads/2016/04/IMG_5050.jpg
https://elavegan.com/wp-content/uploads/2019/09/Vegan-burger-with-Awesome-burger-patty-veggies-and-homemade-cheese.jpg

console.log(burger1.nameAndKcal(), burger2.nameAndKcal(), burger3.nameAndKcal(), burger4.nameAndKcal(), burger5.nameAndKcal());
*/
