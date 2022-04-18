const coffeeShop = {
    branch: "Manchester",
    menuDrinks: {
        coffee: 2,
        tea: 1.50,
        cocoa: 3,
        milkshake: 2,
    },
    menuFoods: {
        cake: 1,
        scone: 1.50,
        donut: 2,
        croissant: 1,
    },

    // create an order for a list of items from the drinks menu
    drinksOrder( listOfDrinks ){
        if(!Array.isArray(listOfDrinks)){
            console.log(`drinksOrdered(): needs a list as a parameter :: ${listOfDrinks}`);
            return; 
        }

        let textToDisplay = `% Welcome CafeBeanz - ${this.branch} branch.\n% Your order follows:\n`;
        textToDisplay += this._getOrderFromList( listOfDrinks, this.menuDrinks );
        console.log(textToDisplay);
    },

    // create an order for a list of items from the food menu
    foodOrder( listOfFoods ){
        if(!Array.isArray(listOfFoods)){
            console.log(`foodOrdered(): needs a list as a parameter :: ${listOfFoods}`);
            return; 
        }

        let textToDisplay = `% Welcome to CafeBeanz - ${this.branch} branch.\n% Your order follows:\n`;
        textToDisplay += this._getOrderFromList( listOfFoods, this.menuFoods );
        console.log(textToDisplay);
    },

    // create an order for a list of mixed items
    mixedOrder( listOfStuffs ){
        if(!Array.isArray(listOfStuffs)){
            console.log(`foodOrdered(): needs a list as a parameter :: ${listOfStuffs}`);
            return; 
        }

        let textToDisplay = `% Welcome to CafeBeanz - ${this.branch} branch.\n% Your order follows:\n`;
        textToDisplay += this._getOrderFromList( listOfStuffs, { ...this.menuDrinks, ...this.menuFoods } );
        console.log(textToDisplay);
    },

    // goes through the list of items and adds it to the order using the menu list provided
    _getOrderFromList( itemsToOrder, internalMenu ){

        const maxWidth = Math.max( ...itemsToOrder.map(x => x.length), 12 )    
        let [ completeOrder, totalAmount ] = [ '',  0 ];

        for(let it of itemsToOrder){
          
            const it_search = it.replaceAll(' ','').toLowerCase();
     
            const it_menu = Object
                .entries( internalMenu )
                .find( (x) => x[0].toLowerCase().replaceAll('_','').replaceAll(' ','') == it_search );

            if( it_menu ){
                // get the price, then price as string for followup handling
                let [ price, price_str ] = [ it_menu[1], it_menu[1].toString() ];
                
                // price as string 
                price_str += ( price_str.indexOf('.')==-1 ? '.00' : (price_str.indexOf('.')>price_str.length-3 ? '0' : '') );
                
                completeOrder += `~ ${ it.trim().padEnd(maxWidth) } : ${ price_str.padStart(6) }\n`;
                totalAmount += price;
            }
            else completeOrder += `> We don't sell '${ it.trim() }'\n`;  // add line for item not found
        }
        // total amount in string and with 2 decimals 
        let totalAmount_str = totalAmount.toString();
        totalAmount_str += ( totalAmount_str.indexOf('.')==-1 ? '.00' : (totalAmount_str.indexOf('.')>totalAmount_str.length-3 ? '0' : '') );
        // add the total line to the order
        completeOrder += `# ${'Total to pay'.padEnd(maxWidth)} = ${totalAmount_str.padStart(6)}\n`;
        return completeOrder;
    },

};

coffeeShop.drinksOrder( 'coffee,tea, latte, cocoa , milkshake'.split(',') );
coffeeShop.foodOrder( 'cake, cookie, scone, donut, croissant'.split(',') );
coffeeShop.mixedOrder( 'coffee, donut, tea, scone, cocoa'.split(',') );
