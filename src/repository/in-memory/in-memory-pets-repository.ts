import { randomUUID } from "node:crypto";
import { Pet, PetsRepository } from "../pets-repository";

export class InMemoryPetsRepository implements PetsRepository{
  private pet: Pet[] = []

  async create(data: Pet){
    const newPet = {...data, id: randomUUID()}
    this.pet.push(newPet)
    return newPet
  } 
}