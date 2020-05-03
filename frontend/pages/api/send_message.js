import fs from 'fs';
import { messages } from './get_messages';
import formidable from 'formidable';

export const config = {
    api: {
      bodyParser: false,
    },
};

export default (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = './public';
    form.keepExtensions = true;
    let newMessage = { out: true, date: messages.length + 1 };

    return form.parse(req)
        .on('file', (name, file) => {
            newMessage['media'] = file.path.replace(/public(\\|\/)/, '');
        })
        .on('field', (name, value) => {
            newMessage[name] = value;
        })
        .on('end', () => {
            res.end();
            messages.push(newMessage);
        });
}