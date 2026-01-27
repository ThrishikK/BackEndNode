// controllers/errorController.js
export const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status || "error",
    message: err.message,
  });
};
