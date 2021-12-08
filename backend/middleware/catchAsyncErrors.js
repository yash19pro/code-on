module.exports = (lotusSpirit) => (req, res, next) => {
  Promise.resolve(lotusSpirit(req, res, next)).catch(next);
};
