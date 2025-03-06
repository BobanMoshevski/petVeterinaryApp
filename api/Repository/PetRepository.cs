using api.Data;
using api.Helpers;
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

        public async Task<List<Pet>> GetAllPets(PetQueryObject query)
        {
            var pets = _context.Pets
                .Include(o => o.Owner)
                .Include(pv => pv.PetVaccines)
                .ThenInclude(v => v.Vaccine)
                .AsQueryable();

            if (!string.IsNullOrWhiteSpace(query.Name))
            {
                pets = pets.Where(p => p.Name.Contains(query.Name));
            }

            if (!string.IsNullOrWhiteSpace(query.SortBy))
            {
                if (query.SortBy.Equals("Name", StringComparison.OrdinalIgnoreCase))
                {
                    pets = query.IsDescending ? pets.OrderByDescending(p => p.Name) : pets.OrderBy(p => p.Name);
                }
            }

            var skipNumber = (query.PageNumber - 1) * query.PageSize;

            return await pets.Skip(skipNumber).Take(query.PageSize).ToListAsync();
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
