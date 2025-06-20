using api.Dtos.Vaccine;

namespace api.Dtos.Pet
{
    public class PetsDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Species { get; set; }
        public string Breed { get; set; }
        public string Gender { get; set; }
        public float Weight { get; set; }
        public List<VaccineDto> Vaccines { get; set; }
        public int Age =>
            DateTime.Today.Year - DateOfBirth.Year -
            (DateTime.Today.DayOfYear < DateOfBirth.DayOfYear ? 1 : 0);
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
