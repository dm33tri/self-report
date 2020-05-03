import fs from 'fs';

export const messages = [
    { message: 'Hello, world!', date: 1 }, 
    { message: 'How are you?', date: 2 }, 
    { message: 'Hello, friend!', out: true, date: 3 },
    { message: 'Hello, friend!', out: true, date: 4 },
    { message: 'Hello, friend!', out: true, date: 5 },
    { message: 'Hello, friend!', out: true, date: 6 },
    { message: 'Hello, friend!', out: true, date: 7 },
    { message: 'Hello, friend!', out: true, date: 8 },
    { message: 'Hello, friend!', out: true, date: 9 },
    { message: 'Hello, friend!', out: true, date: 10 },
    { message: 'How are you?', date: 11 }, 
    { message: 'How are you?', date: 12 }, 
    { message: 'How are you?', date: 13 }, 
    { message: 'How are you?', date: 14 }, 
    { message: 'How are you?', date: 15 }, 
    { message: 'How are you?', date: 16 }, 
    { message: 'How are you?', date: 17 }, 
    { message: 'How are you?', date: 18 }, 
    { message: 'How are you?', date: 19 }, 
    { message: 'How are you?', date: 20 }, 
    { message: 'Hello, friend!', out: true, date: 21 },
    { message: 'Hello, friend!', out: true, date: 22 },
    { message: 'Hello, friend!', out: true, date: 23 },
    { message: 'Hello, friend!', out: true, date: 24 },

];

export default (req, res) => {
    const from = req.query && req.query.from || 0;
    res.statusCode = 200;
    res.json(messages.filter((message) => message.date > from));
}