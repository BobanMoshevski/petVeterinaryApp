using api.Data;
using api.Dtos.Vaccine;
using api.Helpers;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class VaccineRepository : IVaccineRepository
    {
        private readonly ApplicationDBContext _context;
        public VaccineRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<List<Vaccine>> GetAllVaccines(VaccineQueryObject query)
        {
            var vaccines = _context.Vaccines.AsQueryable();

            if (!string.IsNullOrWhiteSpace(query.Name))
            {
                vaccines = vaccines.Where(v => v.Name.Contains(query.Name));
            }

            if (!string.IsNullOrWhiteSpace(query.SortBy))
            {
                if (query.SortBy.Equals("Name", StringComparison.OrdinalIgnoreCase))
                {
                    vaccines = query.IsDescending ? vaccines.OrderByDescending(v => v.Name) : vaccines.OrderBy(v => v.Name);
                }
            }

            var skipNumber = (query.PageNumber - 1) * query.PageSize;

            return await vaccines.Skip(skipNumber).Take(query.PageSize).ToListAsync();
        }

        public async Task<Vaccine?> GetVaccineById(int id)
        {
            return await _context.Vaccines.FindAsync(id);

        }

        public async Task<Vaccine> CreateVaccine(Vaccine vaccineModel)
        {
            await _context.Vaccines.AddAsync(vaccineModel);
            await _context.SaveChangesAsync();
            return vaccineModel;
        }

        public async Task<Vaccine?> UpdateVaccine(int id, UpdateVaccineRequestDto vaccineDto)
        {
            var existingVaccine = await _context.Vaccines.FirstOrDefaultAsync(v => v.Id == id);

            if (existingVaccine == null)
            {
                return null;
            }

            existingVaccine.Name = vaccineDto.Name;

            await _context.SaveChangesAsync();

            return existingVaccine;
        }

        public async Task<Vaccine?> DeleteVaccine(int id)
        {
            var vaccineModel = await _context.Vaccines.FirstOrDefaultAsync(v => v.Id == id);

            if (vaccineModel == null)
            {
                return null;
            }

            _context.Vaccines.Remove(vaccineModel);
            await _context.SaveChangesAsync();

            return vaccineModel;
        }
    }
}
