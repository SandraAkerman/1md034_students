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
