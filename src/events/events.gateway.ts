import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";


@WebSocketGateway({cors: true}) //Enable cors for Frontend
export class EventsGateway{
    @WebSocketServer()
    server: Server;

    //Send update to all connected Clients

    handleMachineStateUpdate(data:any){
        console.log("Sending Update to Frontend");
        this.server.emit('machine-status-update',data);

        //In future we can handle acknowledgement here
    }
}