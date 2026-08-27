const http = require("http")
const server = http.createServer((req, res) => {
 if (req.url === "/") {
 res.write("Trang chu")
 }
 else if (req.url === "/about") {
 res.write("Trang gioi thieu")
 }
 else if (req.url === "/contact") {
 res.write("Trang lien he")
 }
 res.end()
})
server.listen(3000)