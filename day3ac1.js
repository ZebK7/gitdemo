//activity 1 loop cycling through array
let films = ["StarWars","Batman","StarTrek","Ghostbusters","Jaws"];
films.push("Indiana","Brucelee");

let txt = "";
for (let x in films) {
  txt += films[x] + " ";
}

console.log(films);
console.log(films[3]);
console.log(films.length); 