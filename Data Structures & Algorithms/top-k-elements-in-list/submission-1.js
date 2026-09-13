class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqs = {}
        const results = []

        for (const num of nums) {
            freqs[num] = (freqs[num] || 0) + 1
        }

        const entries = Object.entries(freqs)
        entries.sort((a, b) => b[1] - a[1]);

        for (let i = 0; i < k; i++) {
            results.push(entries[i][0])
        }

        return results;
    }
}
