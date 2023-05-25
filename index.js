const { dockStart } = require('@nlpjs/basic');

(async () => {
    await dockStart();
})();

const { ExpressApiServer } = require('@nlpjs/express-api-server');

const server = new ExpressApiServer();

// Change the port number
const port = 3001;

server.start(port);