function logger(req, _, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

export default logger;