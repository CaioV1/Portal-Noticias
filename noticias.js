const http = require("http");

const server = http.createServer((req, res) => {

    const categoria = req.url;

    if(categoria == "/tecnologia"){

        res.end("<html><body>Noticías de Tecnologia</body></html>")

    } else if (categoria == "/moda"){

        res.end("<html><body>Noticías de Moda</body></html>")

    } else if (categoria == "/games"){

        res.end("<html><body>Noticías de Games</body></html>")
        
    } else {

        res.end("<html><body>Portal de Noticías</body></html>")

    }

})

server.listen(3000);