const customMiddleware = (req, res, next) => {
  let verify = true;
  if (!verify) {
    return res.send("User not Verified");
  }
  next();
};

module.exports = customMiddleware;
