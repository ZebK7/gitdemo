
let oneHourOfTime = 18
let placeOfWork = 'DWP'
let townOfHome = 'Salford'

if (oneHourOfTime <= 7 || oneHourOfTime >= 18 ) console.log(`I'm at home, in ${townOfHome}`);
else if (oneHourOfTime < 9) console.log(`I'm commuting between '${townOfHome}' and '${placeOfWork}'`);
else if (oneHourOfTime > 17) console.log(`I'm commuting between '${placeOfWork}' and '${townOfHome}'`);
else console.log(`I\'m at work all day (well, 9 to 5) at '${placeOfWork}'`);