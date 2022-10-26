import { StatusCodes } from "http-status-codes";
const errorHandlerMiddleware = (error, req, res, next) => {
  const defaultError = {
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: error.message || "Something went wrong, please try again later!",
  };
  if (error.name === "ValidationError") {
    (defaultError.statusCode = StatusCodes.BAD_REQUEST),
      (defaultError.message = Object.values(error.errors)
        .map((item) => item.message)
        .join(", "));
  }
  if (error.code && error.code === 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.message = `${Object.keys(
      error.keyValue
    )} field must be unique!`;
  }
  /* res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error); */
  res.status(defaultError.statusCode).json({
    msg: defaultError.message,
  });
};

export default errorHandlerMiddleware;
