var http=require('http');

http.createServer(function(req,res){
    console.log(req.method);
    if(req.method=="GET"){
        console.log("GET METHOD");
    }
    else{
        console.log("POST METHOD");
    }
    res.write("Hi..Node Started!!");
    res.end();
}).listen(8080,()=>console.log("Server started!!"));

