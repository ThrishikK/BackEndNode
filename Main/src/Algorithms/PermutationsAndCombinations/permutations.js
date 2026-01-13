function getPermutations(str) {
  if (str.length === 1) return [str];

  let result = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);

    const remainingPerms = getPermutations(remaining);

    for (let perm of remainingPerms) {
      result.push(currentChar + perm);
    }
  }

  return result;
}

// Example
// console.log(getPermutations("PRASAD"));
// console.log(getPermutations("ABC"));

export default getPermutations;
