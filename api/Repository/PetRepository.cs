using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class PetRepository : IPetRepository
    {
        private readonly ApplicationDBContext _context;
        public PetRepository(ApplicationDBContext context) 
        {
            _context = context;
        }

        public async Task<Pet?> CreatePet(Pet petModel)
        {
            await _context.AddAsync(petModel);
            await _context.SaveChangesAsync();
            var petWithOwnerModel = await GetPetById(petModel.Id);
            return petWithOwnerModel;
        }

        public async Task<Pet?> DeletePet(int id)
        {
            var petModel = await _context.Pets.FirstOrDefaultAsync(p => p.Id == id);

            if (petModel == null)
            {
                return null;
            }

            _context.Pets.Remove(petModel);
            await _context.SaveChangesAsync();
            return petModel;
        }

        public async Task<List<Pet>> GetAllPets()
        {
            return await _context.Pets
                .Include(p => p.Owner)
                .ToListAsync();
        }

        public async Task<Pet?> GetPetById(int id)
        {
            return await _context.Pets
                .Include(p => p.Owner)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<Pet?> UpdatePet(int id, Pet petModel)
        {
            var existingPet = await _context.Pets.FindAsync(id);

            if (existingPet == null)
            {
                return null;
            }

            existingPet.Name = petModel.Name;
            existingPet.Age = petModel.Age;
            existingPet.OwnerId = petModel.OwnerId;

            await _context.SaveChangesAsync();

            var petWithOwnerModel = await GetPetById(existingPet.Id);
            return petWithOwnerModel;
        }
    }
}
