//activity 4 using for and if
let films = ["StarWars","Batman","StarTrek","Ghostbusters","Jaws"];
films.push("Indiana","Brucelee");

let txt = "";
for (let x in films) {
  txt += films[x] + " ";
}
console.log(films);

if (films[2] == "Ghostbusters") {
  console.log("Yay! It's Ghostbusters!");
}
  else {
  console.log("Boo! We want Ghostbusters!");
}

