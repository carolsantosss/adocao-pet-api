import { Controller, Get, Post } from "@nestjs/common";
import { DogsService } from "./dogs.service";
import { Dogs } from "./entidades/dogs";


@Controller('dogs')
class DogsController{
    // Definir rotas e metodos 
constructor(private readonly dogsService: DogsService){}
    
    @Get('/all')
    findAll():Dogs[] {
        return this.dogsService.findAll();
    }
}

export {DogsController};