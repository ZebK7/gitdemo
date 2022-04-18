// objects activity2
const pet = {name: 'Timmy', typeOfPet: 'dog', age: 3, colour: 'green',
  eating:()=>{
return 'chocolate cake and ice cream';
  },
  drinking:()=>{
      return 'whiskey and soda'
  }
};
  console.log(`${pet.name} has been eating ${pet.eating()} and drinking ${pet.drinking()} which explains why he is ${pet.colour}, the Naughty ${pet.typeOfPet}!`);
