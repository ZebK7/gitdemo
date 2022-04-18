//activity3

const account = {accnum: 50449921, pin: 1234, balance: 50000, amount: 300};

if ((account.pin === 1234) && (account.amount <= account.balance)){

 console.log(`Withdrawing ${account.amount} from account ${account.accnum} `); 
}else {
   console.log('Please contact your bank'); 
}

    
   