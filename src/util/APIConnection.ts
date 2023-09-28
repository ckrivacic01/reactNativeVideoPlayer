import SockJS from 'sockjs-client'
class WebSocketAPI{

    host: string
    constructor(host: string){
        this.host = host;
    }

    start(){
        let socket = new WebSocket(this.host);
        socket.onopen = () => console.log("Socket open")
    }
}

const connection = new WebSocketAPI('http://localhost/api/v1/push');
connection.start();