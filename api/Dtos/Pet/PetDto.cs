using api.Dtos.Owner;
using api.Dtos.Vaccine;

namespace api.Dtos.Pet
{
    public class PetDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public PetWithOwnerDto Owner { get; set; }
        public List<VaccineDto> Vaccines { get; set; }
    }
}
