import { randomUUID } from "node:crypto";
import { Pet, PetsRepository } from "../pets-repository";

export class InMemoryPetsRepository implements PetsRepository{
  public pets: Pet[] = []

  async create(data: Pet){
    const newPet = {...data, id: randomUUID()}
    this.pets.push(newPet)
    return newPet
  } 

  async findById(id: string) {
    const pet = this.pets.find((item) => item.id === id)

    if (!pet) {
      throw new Error("Pet not found")
    }

    return pet
  }

  async findByEntityId(entityId: string) {
    const pet = this.pets.filter((item) => item.entityId === entityId)

    if (!pet) {
      throw new Error("Pet not found")
    }

    return pet
  }
}