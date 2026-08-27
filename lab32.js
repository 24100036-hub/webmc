const http = require("http")
const server = http.createServer((req, res) => {
 console.log(req.url)
 res.write("Server dang chay")
 res.end()
})
server.listen(3000)