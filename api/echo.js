module.exports = (req, res) => {
    const input = req.body.input;
    res.status(200).send(`Message from server: ${input}`);
};
