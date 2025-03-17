using api.Dtos.Pet;
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
                Age = petModel.Age
            };
        }

        public static PetDto ToPetDto(this Pet petModel)
        {
            return new PetDto
            {
                Id = petModel.Id,
                Name = petModel.Name,
                Age = petModel.Age,
                Owner = new PetWithOwnerDto
                {
                    Id = petModel.Owner.Id,
                    Name = petModel.Owner.Name,
                    Surname = petModel.Owner.Surname,
                    Age = petModel.Owner.Age
                }
            };
        }

        public static Pet ToPetFromCreate(this CreatePetRequestDto petDto, int ownerId)
        {
            return new Pet
            {
                Name = petDto.Name,
                Age = petDto.Age,
                OwnerId = ownerId
            };
        }

        public static Pet ToPetFromUpdate(this UpdatePetRequestDto petDto)
        {
            return new Pet
            {
                Name = petDto.Name,
                Age = petDto.Age,
                OwnerId = petDto.OwnerId
            };
        }
    }
}
