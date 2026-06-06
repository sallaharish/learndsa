// will be uploaded
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // to locate the position in array where we need to place the element
    let x=0;
    // second pointer for iterating over the entire array
    for(let i=0;i<=nums.length;i++){
        if(nums[i+1]>nums[i]){
            x+=1
            nums[x]=nums[i+1]
     
        }
    }
    return x+1
};