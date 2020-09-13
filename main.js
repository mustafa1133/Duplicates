var containsDuplicate = function(nums) {
    
    let map= new Map();
        if( nums.length < 1 )
        {
            return false;
        }
    for(let i=0; i<nums.length; i++)
    {

        map.set(nums[i],i);
        
        if(map.size === nums.length)
        {
            return false;
        }

    }
    return true;
};
let arr= [1,3,4];
console.log(containsDuplicate(arr));