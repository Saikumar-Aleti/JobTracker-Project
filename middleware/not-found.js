const notFoundMiddleware = (req, res) => {
  res.status(404).send("<h3>Route doesn't exist!</h3>");
};
export default notFoundMiddleware;
