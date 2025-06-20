using api.Dtos.Vaccine;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface IVaccineRepository
    {
        Task<List<Vaccine>> GetAllVaccines(VaccineQueryObject query);
        Task<Vaccine?> GetVaccineById(int id);
        Task<Vaccine> CreateVaccine(Vaccine vaccineModel);
        Task<Vaccine?> UpdateVaccine(int id, UpdateVaccineRequestDto vaccineDto);
        Task<Vaccine?> DeleteVaccine(int id);
        Task<int> GetTotalVaccines();
    }
}
