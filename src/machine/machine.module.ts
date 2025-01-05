import { Module } from '@nestjs/common';
import { MachineController } from './machine.controller';
import { MachineService } from './machine.service';
import { EventsGateway } from 'src/events/events.gateway';

@Module({
  controllers: [MachineController],
  providers: [MachineService,EventsGateway]
})
export class MachineModule {}
