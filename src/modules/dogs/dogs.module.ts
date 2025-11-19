import { Module } from "@nestjs/common";
import { DogsController } from "./dogs.controler";
import { DogsService } from "./dogs.service";

@Module({
    imports: [],
    controllers: [DogsController],
    providers: [DogsService],
})

export class DogsModule{}