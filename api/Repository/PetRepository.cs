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

        public async Task<Pet?> CreatePet(Pet petModel, List<int> vaccineIds)
        {
            var validVaccineIds = await _context.Vaccines
                .Where(v => vaccineIds.Contains(v.Id))
                .Select(v => v.Id)
                .ToListAsync();

            if (validVaccineIds.Count != vaccineIds.Count)
            {
                return null;
            }

            petModel.PetVaccines = validVaccineIds.Select(vaccineId => new PetVaccine
            {
                VaccineId = vaccineId
            }).ToList();

            await _context.Pets.AddAsync(petModel);
            await _context.SaveChangesAsync();

            return await _context.Pets
                .Include(o => o.Owner)
                .Include(pv => pv.PetVaccines)
                .ThenInclude(v => v.Vaccine)
                .FirstOrDefaultAsync(p => p.Id == petModel.Id);
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
                .Include(o => o.Owner)
                .Include(pv => pv.PetVaccines)
                .ThenInclude(v => v.Vaccine)
                .ToListAsync();
        }

        public async Task<Pet?> GetPetById(int id)
        {
            return await _context.Pets
                .Include(o => o.Owner)
                .Include(pv => pv.PetVaccines)
                .ThenInclude(v => v.Vaccine)
                .FirstOrDefaultAsync(p => p.Id == id);
        }

        public async Task<Pet?> UpdatePet(int id, Pet petModel)
        {
            var existingPet = await _context.Pets
                .Include(pv => pv.PetVaccines)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (existingPet == null)
            {
                return null;
            }

            existingPet.Name = petModel.Name;
            existingPet.Age = petModel.Age;
            existingPet.OwnerId = petModel.OwnerId;

            existingPet.PetVaccines.Clear();

            if (petModel.PetVaccines != null && petModel.PetVaccines.Any())
            {
                foreach (var petVaccine in petModel.PetVaccines)
                {
                    existingPet.PetVaccines.Add(new PetVaccine
                    {
                        VaccineId = petVaccine.VaccineId,
                        PetId = existingPet.Id
                    });
                }
            }

            await _context.SaveChangesAsync();

            var petWithOwnerModel = await GetPetById(existingPet.Id);
            return petWithOwnerModel;
        }
    }
}
