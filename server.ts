const express = require('express')
const errorhandler = require('errorhandler')
const path = require('path')

process.env.NODE_ENV = 'production';

const app = express();
app.set('port', process.env.PORT || 3000);

console.info(process.env.NODE_ENV);
app.get('/public/health/', (req, res) => res.send("200"));


if (process.env.NODE_ENV === 'production') {
    app.use('/images', express.static(path.join(__dirname, 'build', 'images'), { maxAge: 31557600000 }));
    app.use('/libs', express.static(path.join(__dirname, 'build', 'libs'), { maxAge: 31557600000 }));
    app.use('/static', express.static(path.join(__dirname, 'build', 'static'), { maxAge: 31557600000 }));
    app.get("/firebase-messaging-sw.js", (req, res) => {
        res.sendFile(path.resolve(__dirname, "public", "firebase-messaging-sw.js"));
    });
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));
} else {
    app.get('/:url', (req, res) => (res.redirect('http://localhost:3001/' + req.params.url + "set env production")));
}

app.use(errorhandler());

app.listen(app.get('port'), () => {
    console.info('Node server compiled successfully!');
    console.info('App is running at http://localhost:' + app.get('port') + ' in ' + app.get('env').toUpperCase() + ' mode');
});

module.exports = app;