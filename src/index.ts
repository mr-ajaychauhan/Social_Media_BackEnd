import{Server } from './server'

let server = new Server().app;
let port = 6000;

server.listen(port, () => {
    console.log('server is running at port 6000');

});



