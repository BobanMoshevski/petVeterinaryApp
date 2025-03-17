using api.Dtos.Vaccine;
using api.Models;

namespace api.Mappers
{
    public static class VaccineMapper
    {
        public static VaccineDto ToVaccineDto(this Vaccine vaccineModel)
        {
            return new VaccineDto
            {
                Id = vaccineModel.Id,
                Name = vaccineModel.Name
            };
        }

        public static Vaccine ToVaccineFromCreateDto(this CreateVaccineRequestDto vaccineDto)
        {
            return new Vaccine
            {
                Name = vaccineDto.Name
            };
        }
    }
}
