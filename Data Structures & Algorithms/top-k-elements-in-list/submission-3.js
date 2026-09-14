class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        const freq = []
        const result = []

        for (let i = 0; i < nums.length + 1; i++) {
            freq.push([]);
        }

        for (const num of nums) {
            count[num] = (count[num] || 0) +  1
        }

        const entries = Object.entries(count);

        for (const [n, c] of entries) {
            freq[c].push(+n);
        }

        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                result.push(n);
                if (result.length === k) {
                    return result;
                }
            }
        }

    }
}
