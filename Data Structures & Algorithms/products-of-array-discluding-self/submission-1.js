class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = []
        const prefix = []
        const postfix = []
        let product = 1

        // for loop to calculate prefix
        for (let i = 0; i < nums.length; i++) {
            product*= nums[i]
            prefix.push(product); 
        }

        // re-setting product
        product = 1

        // for loop to calculate postfix
        for (let i = nums.length-1; i >= 0; i--) {
            product*= nums[i]
            postfix.push(product);
        }

        // reversing postfix array so that we can have postfixes calculated from right to left
        postfix.reverse()

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                output.push(1 * postfix[i+1])
            } else if (i === nums.length - 1) {
                output.push(prefix[i-1] * 1)
            } else {
                output.push(prefix[i-1] * postfix[i+1])
            }
        }

        return output
    }
}
