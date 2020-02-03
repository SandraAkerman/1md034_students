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

var burgerFive = document.createElement("p");
burgerFive.innerHTML = burger5.nameAndKcal();
document.getElementById("myID").appendChild(burgerFive);
*/

var menu = [burger1, burger2, burger3];

let i = 0;
for (i; i < menu.length; i++) {
	var burger = document.createElement("p");
	burger.innerHTML = menu[i].nameAndKcal();

  if(menu[i].gluten) {
		burger.innerHTML = burger.innerHTML + " " + "contains gluten";
    }

  if(menu[i].hazelnuts){
		 burger.innerHTML = burger.innerHTML + " " +"contains hazelnuts";
     }
	document.getElementById("myID").appendChild(burger);
}




console.log(burger1.nameAndKcal(), burger2.nameAndKcal(), burger3.nameAndKcal(), burger4.nameAndKcal(), burger5.nameAndKcal());
