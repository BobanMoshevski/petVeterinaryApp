using api.Data;
using api.Dtos.Owner;
using api.Helpers;
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

        public async Task<List<Owner>> GetAllOwners(OwnerQueryObject query)
        {
            var owners = _context.Owners.Include(p => p.Pets)
                .ThenInclude(pv => pv.PetVaccines)
                .ThenInclude(v => v.Vaccine)
                .AsQueryable();

            if (!string.IsNullOrWhiteSpace(query.Name))
            {
                owners = owners.Where(o => o.Name.Contains(query.Name));
            }

            if (!string.IsNullOrWhiteSpace(query.Surname))
            {
                owners = owners.Where(o => o.Surname.Contains(query.Surname));
            }

            if (!string.IsNullOrWhiteSpace(query.SortBy))
            {
                if (query.SortBy.Equals("Name", StringComparison.OrdinalIgnoreCase))
                {
                    owners = query.IsDescending ? owners.OrderByDescending(o => o.Name) : owners.OrderBy(o => o.Name);
                }

                if (query.SortBy.Equals("Surname", StringComparison.OrdinalIgnoreCase))
                {
                    owners = query.IsDescending ? owners.OrderByDescending(o => o.Surname) : owners.OrderBy(o => o.Surname);
                }
            }

            var skipNumber = (query.PageNumber - 1) * query.PageSize;

            return await owners.Skip(skipNumber).Take(query.PageSize).ToListAsync();
        }

        public async Task<Owner?> GetOwnerById(int id)
        {
            return await _context.Owners.Include(p => p.Pets)
                .ThenInclude(pv => pv.PetVaccines)
                .ThenInclude(v => v.Vaccine)
                .FirstOrDefaultAsync(o => o.Id == id);
        }

        public async Task<Owner> CreateOwner(Owner ownerModel)
        {
            await _context.Owners.AddAsync(ownerModel);
            await _context.SaveChangesAsync();
            return ownerModel;
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
            existingOwner.DateOfBirth = ownerDto.DateOfBirth;
            existingOwner.Email = ownerDto.Email;
            existingOwner.PhoneNumber = ownerDto.PhoneNumber;
            existingOwner.Address = ownerDto.Address;
            existingOwner.Country = ownerDto.Country;
            existingOwner.City = ownerDto.City;
            existingOwner.PostalCode = ownerDto.PostalCode;
            existingOwner.UpdatedAt = ownerDto.UpdatedAt;

            await _context.SaveChangesAsync();

            return existingOwner;
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

        public Task<bool> OwnerExists(int id)
        {
            return _context.Owners.AnyAsync(o => o.Id == id);
        }

        public async Task<int> GetTotalOwners()
        {
            return await _context.Owners.CountAsync();
        }
    }
}
