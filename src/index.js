const app = require('./server')

app.listen(app.get('port'), () => {
    console.log('listening on port', app.get('port'));
});