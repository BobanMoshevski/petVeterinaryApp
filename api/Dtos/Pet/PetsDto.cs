using api.Dtos.Vaccine;

namespace api.Dtos.Pet
{
    public class PetsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public List<VaccineDto> Vaccines { get; set; }
    }
}
