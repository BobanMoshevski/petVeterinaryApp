using api.Dtos.Owner;
using api.Models;

namespace api.Mappers
{
    public static class OwnerMappers
    {
        public static OwnerDto ToOwnerDto(this Owner ownerModel)
        {
            return new OwnerDto
            {
                Id = ownerModel.Id,
                Name = ownerModel.Name,
                Surname = ownerModel.Surname,
                Age = ownerModel.Age,
                Pets = ownerModel.Pets.Select(p => p.ToPetsDto()).ToList()
            };
        }

        public static Owner ToOwnerFromCreateDto(this CreateOwnerRequestDto ownerDto)
        {
            return new Owner
            {
                Name = ownerDto.Name,
                Surname = ownerDto.Surname,
                Age = ownerDto.Age,
            };
        }
    }
}
