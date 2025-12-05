import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { DogsService } from "./dogs.service";
import { Dogs } from "./entidades/dogs";
import { CreateDogDTO } from "./dto/create-dog.dto";

@Controller('dogs')

export class DogsController{
    // Definir rotas e metodos 
constructor(private readonly dogsService: DogsService){}
    
    @Get('/all')
    findAll():Dogs[] {
        return this.dogsService.findAll();
    }

    @Post('')
    create(@Body() createDog: CreateDogDTO) {
        return this.dogsService.createDog(createDog);
    }

    @Delete('/:nome')
    deletdog(@Param('nome') nome: string){
        this.dogsService.deleteDog(nome);
        return {message: `Cachorro ${nome} deletado com sucesso`}
    }

    @Patch('/:nome')
    adoptdog(@Param('nome') nome: string){
        this.dogsService.adoptDog(nome);
        return {message: `Cachorro ${nome} adotado com sucesso`}
    }
}
