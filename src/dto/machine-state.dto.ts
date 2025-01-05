import { IsNotEmpty } from "class-validator";

export class MachineStateDto {
    
    @IsNotEmpty({
        message: "Provide Machine State"
    })
    state: string;

}