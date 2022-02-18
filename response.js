const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
if(req.url=='/home'){
 res.end('welcome home')
}else if(req.url=='/about'){
    res.end('welcome to about Us page ');

}else if(req.url=='/node'){
    
    res.end('welcome to Node js project')
}
else{
    res.writeHead(404,{'content-type':'text/html'})
    res.end('<h1>404 error page not faound</h1>');
}

});
server.listen(8000,'127.0.0.1',()=>{
console.log('port is liistioning')
})