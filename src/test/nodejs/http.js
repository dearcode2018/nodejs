/*
@filename http.js
@author qianye.zheng
@description 
*/
/* 命令行下 执行 node http.js */

/* 通过require指令来创建模块 */
/* 创建http模块，并将实例赋给变量http */
var http = require("http");

/* 创建服务器 listen指定监听端口 */
http.createServer(function(request, response) {
	// http响应头
	response.writeHead(200, {"Content-Type": "text/plain"});
	
	// 发送响应数据
	response.end("hello world \n");
}).listen(8000);

console.log("Server running at http://127.0.0.1:8000/");

/* 在浏览器中输入 http://127.0.0.1:8000/ 即可获取响应 */



















