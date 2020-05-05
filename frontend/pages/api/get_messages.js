import messages from './messages.json';

export { messages };

export default (req, res) => {
    const from = req.query && req.query.from || 0;
    res.statusCode = 200;
    res.json(messages.filter((message) => message.date > from));
}