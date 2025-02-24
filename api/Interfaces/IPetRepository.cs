﻿using api.Models;

namespace api.Interfaces
{
    public interface IPetRepository
    {
        Task<List<Pet>> GetAllPets();
        Task<Pet?> GetPetById(int id);
        Task<Pet?> CreatePet(Pet petModel);
        Task<Pet?> UpdatePet(int id, Pet petModel);
        Task<Pet?> DeletePet(int id);
    }
}
