function logic(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < nums.length; i++) {
    // Decide: extend or start fresh
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      tempStart = i; // start new subarray
    } else {
      currentSum += nums[i]; // extend existing subarray
    }

    // Update best result
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  return {
    maxSum,
    subarray: String(nums.slice(start, end + 1)),
    startIndex: start,
    endIndex: end,
  };
}

console.log(logic([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

export default logic;
