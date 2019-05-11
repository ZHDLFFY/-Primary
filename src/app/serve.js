var http = require('http'); //引入包
var url = require('url');

var users = [{
    username: 'zhd',
    password: '123456'
}];
http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("请求" + pathname + "收到");
    console.log("请求" + request.method.toUpperCase() + "收到");


    if (pathname == '/login') {
        if (request.method.toUpperCase() != 'GET') {
            var postdata = '';
            request.addListener('data', function (data) {
                postdata += data;
            })

            request.addListener('end', function (data) {
                console.log(postdata);
                var user = JSON.parse(postdata);

                response.writeHead(200, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                })
                if (user.username === users[0].username &&
                    user.password === users[0].password) {
                    response.write('{"success":true,"errorCode":0}')
                }
                else {
                    response.write('{"success":false,"erroeCode":100}')
                }
                response.end();
            });
        } else {

            response.write(JSON.stringify(users));
            response.end();
        }

    }
    else {
        response.write("Hello this is my world");
        response.end();
    }

}).listen(8081);
console.log("启动服务器");