var express = require('express'),
app = express();

app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendfile('index.html', {root: __dirname })
});
app.listen(process.env.PORT || 3000);