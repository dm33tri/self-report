export const messages = [
    { message: 'Hello, world!', date: 1 }, 
    { message: 'How are you?', date: 2 }, 
    { message: 'Hello, friend!', out: true, date: 3 },
    { message: 'Hello, friend!', out: true, date: 4 },
    { message: 'Hello, friend!', out: true, date: 5 },
    { message: 'Hello, friend!', out: true, date: 6 },
    { message: 'How are you?', date: 7 }, 
    { message: 'How are you?', date: 8 }, 
    { message: 'How are you?', date: 9 },

];

export default (req, res) => {
    const from = req.query && req.query.from || 0;
    res.statusCode = 200;
    res.json(messages.filter((message) => message.date > from));
}