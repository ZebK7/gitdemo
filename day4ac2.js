//functions activity 2
let orderCount = 0;
const takeOrder = (topping, crustType) => {
    orderCount++;
    console.log(`Pizza with ${topping} + ' on' + ${crustType}`);
   };


takeOrder('pineapple', 'thin crust');
takeOrder('mushroom' , 'deep pan');
takeOrder('pepper', 'stuff crust');

const getSubTotal = (itemCount) => {
    return itemCount * 7.5;
};

console.log(getSubTotal(orderCount));
