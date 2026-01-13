import getPermutations from "../Algorithms/PermutationsAndCombinations/permutations.js";

export const permutations = (req, res) => {
  const { word } = req.body;
  const result = getPermutations(word);

  res.status(200).json({
    message: "All Permutations",
    combinations_count: result.length,
    word_length: word.length,
    data: result,
  });
};
