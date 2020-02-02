function menuItem(nm, cal, mo, gl, nt, img) {
  this.name = nm;
  this.kcal = cal;
  this.madeOf = mo;
  this.allergens = al;
  this.imagePath = img;
  this.nameAndKcal = function();
    return this.name + ' ' + this.kcal;
};

let burger1 = new menuItem("Smoky burger", "500kCal","patty made from black beans and sweet potatoes","contains gluten");
let burger2 = new menuItem("California burger", "550kCal","patty made from carrots and quick oats", "contains gluten");
let burger3= new menuItem("Brooklyn burger", "600kCal","patty made from black beans", "contains gluten \n contains hazelnuts")
let burger4 = new menuItem("Amazing burger", "600kCal","patty made from....", "contains gluten \n contains hazelnuts")
let burger5 = new menuItem("Healthy burger", "450kCal","patty made from...")


console.log(burger1.nameAndKcal(), burger2.nameAndKcal(), burger3.nameAndKcal(), burger4.nameAndKcal(), burger5.nameAndKcal());
