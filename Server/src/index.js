const http = require ("http");

http.createServer(( req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // linea para dar permiso al cliente de hacer request

    if (request.url.includes("/rickandmorty/character")) {
            const id = request.url.split("/").at(-1);

            const characterFound = data.find((character) => character.id === id );

            
    }

}).listen(3001, "127.0.0.1" );