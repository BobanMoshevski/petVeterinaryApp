using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface IPetRepository
    {
        Task<List<Pet>> GetAllPets(PetQueryObject query);
        Task<Pet?> GetPetById(int id);
        Task<Pet?> CreatePet(Pet petModel, List<int> VaccineIds);
        Task<Pet?> UpdatePet(int id, Pet petModel);
        Task<Pet?> DeletePet(int id);
    }
}
