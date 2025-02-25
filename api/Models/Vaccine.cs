namespace api.Models
{
    public class Vaccine
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<PetVaccine> PetVaccines { get; set; } = new List<PetVaccine>();
    }
}
