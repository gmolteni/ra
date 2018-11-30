var express = require('express');
var app = express();
var ipArr = new Array();

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}


app.get('/', function (req, res) {

    if ( typeof c == 'undefined' ) { 
        c = 0; 

    }
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    c++;
    ipArr.push(c.pad(4)+": "+datetime+": "+req.connection.remoteAddress);
    s = '';
    for (var indice in ipArr)
    {
        s += ipArr[indice] + "<br>";
    }
    
    
    res.send('Accedido: '+c+'<br><br>'+s);
    
});
app.listen(80, '0.0.0.0');


/*
 * 
 * 
 */
