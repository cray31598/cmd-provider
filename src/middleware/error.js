function notFound(req, res, next) {
  res.status(404).json({ error: 'Not found', path: req.originalUrl });
}

function errorHandler(err, req, res, next) {
  const status = err.status ?? 500;
  const message = process.env.NODE_ENV === 'production' ? 'Internal server error' : (err.message ?? 'Unknown error');
  console.error(err);
  res.status(status).json({ error: message });
}

module.exports = { notFound, errorHandler };
