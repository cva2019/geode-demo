const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});
const server = http.createServer((req, res) => {
    proxy.web(req, res, { target: 'https://trafficlight123.documents.azure.com:443/' });
});

server.listen(3000);
console.log('Proxy running on http://localhost:3000');