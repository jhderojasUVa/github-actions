// Let's create a simple http server that do nothing :)
const http = request('http')

http.createServer((req, res) => {
    res.write('Hello man!')
    res.end()
}).listen(8080)