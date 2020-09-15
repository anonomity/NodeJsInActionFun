const sqlite3 = require('sqlite3').verbose();

const dbName = 'later.sqlite';

const db = new sqlite3.database(dbName);

db.serialize(() => {
    const sql= `
    CREATE TABLE IF NOT EXISTS articles
    (id integer primary key, title, content TEXT)
    `;
    db.run(sql);
});

interface IArticle {
    all: () => void
}

class Article implements IArticle { 

    public all(){
        db.all('SELECT * FROM articles')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

