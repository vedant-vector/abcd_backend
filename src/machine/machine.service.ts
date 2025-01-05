import { Injectable } from '@nestjs/common';
import { EventsGateway } from 'src/events/events.gateway';

@Injectable()
export class MachineService {
    constructor(private readonly eventsGateway: EventsGateway){
    }

    async handleMachineStateUpdate(state = 'IDEAL'){
     
     this.eventsGateway.handleMachineStateUpdate({state})   

     return {message: 'Machine State Updated Successfully'}
    }


}
