import express from 'express'
const app = express();
const articles = [{title: 'Example'},{title: 'drugi'}];

app.set('port', process.env.PORT || 3001);

app.get('/articles', (req: express.Request, res: express.Response) => {
    res.send(articles)
})

app.post('/articles', (req: express.Request, res: express.Response) => {
    res.send('Ok')
})

app.get('/articles/:id', (req: express.Request, res: express.Response) => {
    const id : any = req.params.id;
    console.log('Fetching:' , id)
    res.send(articles[id]);
})

app.delete('/articles/:id', (req: express.Request, res: express.Response) => {
    const id : any = req.params.id;
    console.log('Deleting', id)
    delete articles[id]
    res.send({ message: 'Deleted'})
})

app.listen(app.get('port'), () => {
    console.log('App started on port ', app.get('port'))
});
