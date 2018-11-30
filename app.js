var express = require('express');
var app = express();
app.get('/', function (req, res) {

    if ( typeof c == 'undefined' ) { c = 0; }
    c++;
    res.send('Accedido: '+c);
    
});
app.listen(80, '0.0.0.0');


/*
 * 
 * 
 */
