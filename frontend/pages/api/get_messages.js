import fs from 'fs';

export const messages = [
    { message: 'Hello, world!', date: 0 }, 
    { message: 'How are you?', date: 1 }, 
    { message: 'Hello, friend!', out: true, date: 2 }
];

export default (req, res) => {
    const from = req.query && req.query.from || 0;
    res.statusCode = 200;
    res.json(messages.filter((message) => message.date > from));
}