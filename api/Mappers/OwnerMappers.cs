using api.Dtos.Owner;
using api.Models;

namespace api.Mappers
{
    public static class OwnerMappers
    {
        public static OwnerDto ToOwnerDto(this Owner owner)
        {
            return new OwnerDto
            {
                Id = owner.Id,
                Name = owner.Name,
                Surname = owner.Surname,
                Age = owner.Age,
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
