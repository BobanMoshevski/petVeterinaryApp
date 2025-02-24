using api.Dtos.Owner;

namespace api.Dtos.Pet
{
    public class PetDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public PetWithOwnerDto Owner { get; set; }
    }
}
