import { BadRequestException, Injectable } from '@nestjs/common';
import { Dog } from './entities/dogs.entitys';  
import { CreateDogDTO } from './dto/create-dog.dto';  

@Injectable()
export class DogsService {
    private readonly dogs: Dog[] = [];  
    
    createDog(dog: CreateDogDTO): Dog {        
        const existsDog = this.dogs.find((d) => d.nome === dog.nome);
        if (existsDog) {
            throw new BadRequestException('Cachorro já cadastrado');
        }
        this.dogs.push(dog);
        return dog;
    }

    findAll(): Dog[] {  
        return this.dogs;
    }

    deleteDog(nome: string): void {  
        const dogIndex = this.dogs.findIndex((d) => d.nome === nome);  
        if (dogIndex === -1) {
            throw new BadRequestException('Cachorro não encontrado');  
        }
        this.dogs.splice(dogIndex, 1);  
    }

    adoptDog(nome: string){
        const dogIndex = this.dogs.findIndex((d) => d.nome === nome);  
        if (dogIndex === -1) {
            throw new BadRequestException('Cachorro não encontrado');  
        }

        //Se não tiver disponivel , não permitir adotar
        if (!this.dogs[dogIndex].disponivel ){
            throw new BadRequestException('Cachorro não disponivel');  

        }

        // Alterar o disponivel para false
        this.dogs[dogIndex].disponivel = false
}

}
