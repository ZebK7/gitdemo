const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}
pressGrindBeans()

//function eg
const capitalise = (name) => {
  //   return name.charAt(0).toUpperCase()
  let letters = name.split("")
  letters[0] = letters[0].toUpperCase()
  name = letters.join("")
  return name
}

const formatName = (fname, sname) => {
  return `${capitalise(fname)} ${capitalise(sname)}`
}

console.log(formatName("ben", "maudslay"))
console.log(formatName("chris", "thomason"))
