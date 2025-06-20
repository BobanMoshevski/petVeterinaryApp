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
                Name = vaccineModel.Name,
                Manufacturer = vaccineModel.Manufacturer,
                BatchNumber = vaccineModel.BatchNumber,
                ExpirationDate = vaccineModel.ExpirationDate,
                Description = vaccineModel.Description,
                CreatedAt = vaccineModel.CreatedAt,
                UpdatedAt = vaccineModel.UpdatedAt
            };
        }

        public static Vaccine ToVaccineFromCreateDto(this CreateVaccineRequestDto vaccineDto)
        {
            return new Vaccine
            {
                Name = vaccineDto.Name,
                Manufacturer = vaccineDto.Manufacturer,
                BatchNumber = vaccineDto.BatchNumber,
                ExpirationDate = vaccineDto.ExpirationDate,
                Description = vaccineDto.Description,
                CreatedAt = vaccineDto.CreatedAt,
                UpdatedAt = vaccineDto.UpdatedAt,
            };
        }
    }
}
