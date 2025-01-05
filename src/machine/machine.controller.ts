import { Body, Controller, Post } from '@nestjs/common';
import { MachineStateDto } from 'src/dto/machine-state.dto';
import { EventsGateway } from 'src/events/events.gateway';
import { MachineService } from './machine.service';

@Controller('machine')
export class MachineController {

    constructor(private machineService:MachineService){}

    @Post('state-update')
    handleMachineStateUpdate(@Body() machineStateDto:MachineStateDto){
        console.log("Received Machine State from Webhook");
        
        return this.machineService.handleMachineStateUpdate(machineStateDto.state);

        
    }

}
