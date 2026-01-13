export const checkWordLength = (req, res, next) => {
  const { word } = req.body;
  if (word.length > 8) {
    return res.status(400).json({
      message: "Word Length greater than 8.Try less than 8",
      given_word: word,
      word_length: word.length,
    });
  }
  next();
};
