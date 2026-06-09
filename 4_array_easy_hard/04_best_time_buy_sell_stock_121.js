/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minimum=prices[0]
    let best =0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]<minimum){
            minimum=prices[i]
        }
        if(prices[i]-minimum>best){
            best=prices[i]-minimum
        }
    }
    return best
};