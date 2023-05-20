const minChange = (amount, coins) => {
    const result = findMinChange(amount, coins);
    if(result === Infinity) return -1;
    else return result;
  };
  
  function findMinChange (amount, coins, cache = {}){
    if(amount in cache) return cache[amount];
    if(amount < 0) return Infinity;
    if(amount === 0) return 0;
    
    let minCoins = Infinity; 
    for(let coin of coins){
      const sumCoins = 1 + findMinChange(amount - coin, coins, cache);
      if(sumCoins < minCoins){
        minCoins = sumCoins;
      }
    }
    cache[amount] = minCoins;
    return minCoins;
  }
  module.exports = {
    minChange,
  };
  
  //substract each coin till we reach 0;
  //once we reach 0 we return the count + 1;
  //on every callstack we compare the count and choose the smallest amount;
  //keep in mind that we are only substracting if amount >= coin