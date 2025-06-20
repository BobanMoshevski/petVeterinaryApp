using api.Dtos.Owner;
using api.Dtos.Pet;
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
                DateOfBirth = ownerModel.DateOfBirth,
                FullName = ownerModel.FullName,
                Age = ownerModel.Age,
                Email = ownerModel.Email,
                Address = ownerModel.Address,
                City = ownerModel.City,
                Country = ownerModel.Country,
                PhoneNumber = ownerModel.PhoneNumber,
                PostalCode = ownerModel.PostalCode,
                CreatedAt = ownerModel.CreatedAt,
                UpdatedAt = ownerModel.UpdatedAt,
                Pets = ownerModel.Pets?
                    .Select(p => p.ToPetsDto()) 
                    .ToList() ?? new List<PetsDto>()
            };
        }

        public static Owner ToOwnerFromCreateDto(this CreateOwnerRequestDto ownerDto)
        {
            return new Owner
            {
                Name = ownerDto.Name,
                Surname = ownerDto.Surname,
                DateOfBirth = ownerDto.DateOfBirth,
                Email = ownerDto.Email,
                PhoneNumber = ownerDto.PhoneNumber,
                Address = ownerDto.Address,
                Country = ownerDto.Country,
                City = ownerDto.City,
                PostalCode = ownerDto.PostalCode,
                CreatedAt = ownerDto.CreatedAt,
                UpdatedAt = ownerDto.UpdatedAt
            };
        }
    }
}
