using api.Data;
using api.Dtos.Owner;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class OwnerRepository : IOwnerRepository
    {
        private readonly ApplicationDBContext _context;
        public OwnerRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Owner> CreateOwner(Owner ownerModel)
        {
            await _context.Owners.AddAsync(ownerModel);
            await _context.SaveChangesAsync();
            return ownerModel;
        }

        public async Task<Owner?> DeleteOwner(int id)
        {
            var ownerModel = await _context.Owners.FirstOrDefaultAsync(o => o.Id == id);

            if(ownerModel == null)
            {
                return null;
            }

            _context.Owners.Remove(ownerModel);
            await _context.SaveChangesAsync();

            return ownerModel;
        }

        public async Task<List<Owner>> GetAllOwners()
        {
            return await _context.Owners.Include(p => p.Pets).ToListAsync();
        }

        public async Task<Owner?> GetOwnerById(int id)
        {
            return await _context.Owners.Include(p => p.Pets).FirstOrDefaultAsync(i => i.Id == id);

        }

        public Task<bool> OwnerExists(int id)
        {
            return _context.Owners.AnyAsync(o => o.Id == id);
        }

        public async Task<Owner?> UpdateOwner(int id, UpdateOwnerRequestDto ownerDto)
        {
            var existingOwner = await _context.Owners.FirstOrDefaultAsync(o => o.Id == id);

            if (existingOwner == null)
            {
                return null;
            }

            existingOwner.Name = ownerDto.Name;
            existingOwner.Surname = ownerDto.Surname;
            existingOwner.Age = ownerDto.Age;

            await _context.SaveChangesAsync();

            return existingOwner;
        }
    }
}
