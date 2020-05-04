export const dialogs = [
    { title: 'Task-123', description: 'Test' }, 
    { title: 'Task-234', description: 'Test' }, 
    { title: 'Task-456', description: 'Test' }, 
];

export default (req, res) => {
    res.statusCode = 200;
    res.json(dialogs);
}