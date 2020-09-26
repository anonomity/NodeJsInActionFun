const http = require('http');
let items = []

const server = http.createServer((req, res) => {
    switch(req.method){
        case 'POST':
            let item = '';
            req.setEncoding('utf8');
            req.on('data', (chunk) => {
                item += chunk
            });
            req.on('end', ()=> {
                items.push(item)
                res.end('Ok\n')
            })
            break;
            
    }
})
server.listen(3000);
