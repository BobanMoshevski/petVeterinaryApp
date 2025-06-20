using api.Dtos.Pet;
using api.Dtos.Vaccine;
using api.Models;

namespace api.Mappers
{
    public static class PetMapper
    {
        public static PetsDto ToPetsDto(this Pet petModel)
        {
            return new PetsDto
            {
                Id = petModel.Id,
                Name = petModel.Name,
                DateOfBirth = petModel.DateOfBirth,
                Species = petModel.Species,
                Breed = petModel.Breed,
                Gender = petModel.Gender,
                Weight = petModel.Weight,
                CreatedAt = petModel.CreatedAt,
                UpdatedAt = petModel.UpdatedAt,
                Vaccines = petModel.PetVaccines?
                    .Select(pv => new VaccineDto
                    {
                        Id = pv.Vaccine.Id,
                        Name = pv.Vaccine.Name
                    }).ToList() ?? new List<VaccineDto>()
            };
        }

        public static PetDto ToPetDto(this Pet petModel)
        {
            return new PetDto
            {
                Id = petModel.Id,
                Name = petModel.Name,
                DateOfBirth = petModel.DateOfBirth,
                Species= petModel.Species,
                Breed = petModel.Breed,
                Gender = petModel.Gender,
                Weight = petModel.Weight,
                CreatedAt = petModel.CreatedAt,
                UpdatedAt = petModel.UpdatedAt,
                Owner = new PetWithOwnerDto
                {
                    Id = petModel.Owner.Id,
                    Name = petModel.Owner.Name,
                    Surname = petModel.Owner.Surname,
                    Address = petModel.Owner.Address,
                    City = petModel.Owner.City,
                    Country = petModel.Owner.Country,
                    DateOfBirth = petModel.Owner.DateOfBirth,
                    Email = petModel.Owner.Email,
                    PhoneNumber = petModel.Owner.PhoneNumber,
                    PostalCode = petModel.Owner.PostalCode,
                    CreatedAt = petModel.Owner.CreatedAt,
                    UpdatedAt = petModel.Owner.UpdatedAt,
                },
                Vaccines = petModel.PetVaccines.Select(pv => new VaccineDto
                {
                    Id = pv.Vaccine.Id,
                    Name = pv.Vaccine.Name
                }).ToList()
            };
        }

        public static Pet ToPetFromCreate(this CreatePetRequestDto petDto, int ownerId)
        {
            return new Pet
            {
                Name = petDto.Name,
                DateOfBirth = petDto.DateOfBirth,
                Species = petDto.Species,
                Breed = petDto.Breed,
                Gender = petDto.Gender,
                Weight = petDto.Weight,
                CreatedAt = petDto.CreatedAt,
                UpdatedAt = petDto.UpdatedAt,
                OwnerId = ownerId,
                PetVaccines = petDto.VaccineIds.Select(vaccineId => new PetVaccine
                {
                    VaccineId = vaccineId
                }).ToList()
            };
        }

        public static Pet ToPetFromUpdate(this UpdatePetRequestDto petDto)
        {
            return new Pet
            {
                Name = petDto.Name,
                DateOfBirth = petDto.DateOfBirth,
                Species = petDto.Species,
                Breed = petDto.Breed,
                Gender = petDto.Gender,
                Weight = petDto.Weight,
                UpdatedAt = petDto.UpdatedAt,
                OwnerId = petDto.OwnerId,
                PetVaccines = petDto.VaccineIds.Select(id => new PetVaccine { VaccineId = id }).ToList()
            };
        }
    }
}
