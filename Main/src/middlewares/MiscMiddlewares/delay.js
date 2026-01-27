export const delay = (ms) => {
  return (req, res, next) => {
    setTimeout(() => {
      next();
    }, ms);
  };
};
