function menuItem(nm, cal, mo, al, img) {
  this.name = nm;
  this.kcal = cal;
  this.madeOf = mo;
  this.allergens = al;
  this.imagePath = img;
  this.nameAndKcal = function(){
    return this.name + ' ' + this.kcal;
};
}

let burger1 = new menuItem("Smoky burger", "500kCal","patty made from black beans and sweet potatoes","contains gluten");

let burger2 = new menuItem("California burger", "550kCal","patty made from carrots and quick oats", "contains gluten");

let burger3 = new menuItem("Brooklyn burger", "600kCal","patty made from black beans", "contains gluten \n contains hazelnuts");

let burger4 = new menuItem("Amazing burger", "600kCal","patty made from....", "contains gluten \n contains hazelnuts");

let burger5 = new menuItem("Healthy burger", "450kCal","patty made from...");


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

/* And this is your vue_script.js */
const vm = new Vue({
  el: '#myID',
  data: {
    /* Then you can copy it to the Vue object like this */
    burgerString: burger1,
    burgerString2: burger2,
    burgerString3: burger3,
    burgerString4: burger4,
    burgerString5: burger5,
  },
  methods: {
    printString: function () {
    /* When accessing variables and functions defined
       within Vue, you need the 'this' keyword */
      console.log(this.burgerString + burger5);
  }
  }
})


console.log(burger1.nameAndKcal(), burger2.nameAndKcal(), burger3.nameAndKcal(), burger4.nameAndKcal(), burger5.nameAndKcal());
