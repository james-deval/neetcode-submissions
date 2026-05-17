class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """
        SOLUTION 2: HASHMAP
        """
        values = {}
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in values:
                return [values[complement], i]
            else:
                values[nums[i]] = i


        """
        SOLUTION 1: BRUTE FORCE SOLUTION
        ans = []
        for i in range(len(nums)):
            for j in range(len(nums)):
                if i != j:
                    if nums[i] + nums[j] == target:
                        if i < j:
                            return [i, j]
        """