const express = require('express')
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const Article= require('./db').Article;

app.set('port', process.env.PORT || 3002);




app.get('/articles', (req, res, next) => {
	Article.all((err, articles) => {
		if (err) return next(err);
		res.send(articles)
	}) 
	res.send(articles)
})

// app.post('/articles', (req, res) => {
// 	const article = {title:  req.body.title };
// 	articles.push(article)
// 	res.send(article)
// })

app.get('/articles/:id', (req, res) => {
	const id = req.params.id
	Article.find(id, (err, article) => {
		if(err) return next(err);
		res.send(article)
	})
})

// app.delete('/articles/:id', (req, res) => {
//     const id : any = req.params.id;
//     console.log('Deleting', id)
//     delete articles[id]
//     res.send({ message: 'Deleted'})
// })

app.listen(app.get('port'), () => {
    console.log('App started on port ', app.get('port'))
});
