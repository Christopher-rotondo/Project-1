const WebSocket = require('ws');
const app = require('express')();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    console.log('Client connected');
    if (wss.clients.size === 1) { 
        console.log("Player 1 connected");
        ws.send('Welcome, Player 1!');
    }
    
    ws.on('message', message => {
        wss.clients.forEach(client => {
            if (client !== ws) {
                client.send('Received message: ' + message);
            }
        });
    });
});

app.get('/', (req, res) => res.send('Hello World!'));
server.listen(3000, () => console.log('Server running on port 3000'));
