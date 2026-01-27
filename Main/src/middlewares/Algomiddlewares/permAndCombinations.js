import AppError from "../../utils/AppError.js";

export const checkWordLength = (req, res, next) => {
  const { word } = req.body;

  if (!word) {
    return next(new AppError("Word is required", 400));
  }

  if (word.length > 8) {
    return next(
      new AppError("Word length must be less than or equal to 8", 400),
    );
  }

  next();
};
