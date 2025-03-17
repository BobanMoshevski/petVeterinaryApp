using api.Data;
using api.Dtos.Vaccine;
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

        public async Task<List<Vaccine>> GetAllVaccines()
        {
            return await _context.Vaccines.ToListAsync();
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
