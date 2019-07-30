let http = require('http');

let server = http.createServer(function(req,res){
    res.end('V8 Runs');
})

server.listen(3000, function(){
    console.log('server listen on 3000');
});