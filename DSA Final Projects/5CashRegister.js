function checkCashRegister(price, cash, cid) {

    const dictionary = {
                "PENNY"         :   0.01,
                "NICKEL"        :   0.05,
                "DIME"          :   0.10,
                "QUARTER"       :   0.25,
                "ONE"           :   1.00,
                "FIVE"          :   5.00,
                "TEN"           :  10.00,
                "TWENTY"        :  20.00,
                "ONE HUNDRED"   : 100.00
            };
    
    let change;
    
    
    
    let cidTotal = calculateCIDTotal(cid);
    
    
    function calculateCIDTotal(drawer) {
          let result = 0;
          for(let i = 0; i < drawer.length; i++) {
            result += drawer[i][1];
          }
          return result;
        };
        
    
      function calculateChange(amountDue, drawer){
          let result = [];
          const _dictionary = dictionary;
          let _cid = drawer.reverse();
    
          for(let i = 0; i < _cid.length; i++) {
            let name = _cid[i][0];
            let value = _dictionary[name];
            let total = _cid[i][1];
            let amount = (total/value).toFixed(2);
            let currencyRet = 0;
            while(amountDue >= value && amount > 0) {
              amountDue -= value;
              amountDue = amountDue.toFixed(2);
              amount --;
              currencyRet++;
            }
    
            if(currencyRet > 0) {
              result.push([name, currencyRet * value]);
            }
    
            if(amountDue == 0.00) {
              let obj = new OpenStatus("OPEN", result);
              return result, obj;
    
            } else if (i === _cid.length -1) {
              
                       
             let obj = new Stats1and2("INSUFFICIENT_FUNDS", []);
    
              return [], obj;
            }
            
          }
    
        
        };
    
        
    
        
        
        
        function calculate(price, cash, cid) {
          let change;
          change = cash - price; // Calculate the change due.
          let cidTotal = calculateCIDTotal(cid);
    
         if (cidTotal === change) {
            let obj = new Stats1and2("CLOSED", cid)
            return obj;
          } else {
            let arr, obj = calculateChange(change, cid);
            return obj;
          }
    
    
        }
    
      
        function Stats1and2(status, change) {
          this.status = status;
          this.change = change;
        };
    
        function OpenStatus(status, change) {
          this.status = status;
          this.change = change;
        };
    
    
    
      
      change = calculate(price, cash, cid);
      
      return change;
    
    }
    
    // console.log(checkCashRegister(19.5, 20, 
    // [
    //   ["PENNY", 1.01], 
    //   ["NICKEL", 2.05], 
    //   ["DIME", 3.1], 
    //   ["QUARTER", 4.25], 
    //   ["ONE", 90], 
    //   ["FIVE", 55], 
    //   ["TEN", 20], 
    //   ["TWENTY", 60], 
    //   ["ONE HUNDRED", 100]
    // ]
    // ), "result value");
    
    console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));