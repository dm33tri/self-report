import formidable from 'formidable';
import fs from 'fs';
export const config = {
    api: {
      bodyParser: false,
    },
};

export default async (req, res) => {
    const form = new formidable.IncomingForm();
    form.uploadDir = './public';
    form.keepExtensions = true;
    let fileName;
    form.parse(req)
        .on('file', (name, file) => {
            fileName = file.path;
        })
        .on('end', () => res.json({ file: fileName }));
}