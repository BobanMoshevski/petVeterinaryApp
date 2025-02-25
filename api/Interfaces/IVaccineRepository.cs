using api.Dtos.Vaccine;
using api.Models;

namespace api.Interfaces
{
    public interface IVaccineRepository
    {
        Task<List<Vaccine>> GetAllVaccines();
        Task<Vaccine?> GetVaccineById(int id);
        Task<Vaccine> CreateVaccine(Vaccine vaccineModel);
        Task<Vaccine?> UpdateVaccine(int id, UpdateVaccineRequestDto vaccineDto);
        Task<Vaccine?> DeleteVaccine(int id);
    }
}
