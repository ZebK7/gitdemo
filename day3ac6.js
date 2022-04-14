// activity 6 nested loops looking for similarity

let bobsFollowers =["tom","dick","harry","fred"];
let hannahsFollowers =["tom","sally","harry","fiona"];
for (let i =0; i < bobsFollowers.length; i++) {
    for (let j =0; j < hannahsFollowers.length; j++) {
if (bobsFollowers[i] === hannahsFollowers[j]) {
 console.log(`Both groups have the names: ` + hannahsFollowers[j])
}
    }
}
