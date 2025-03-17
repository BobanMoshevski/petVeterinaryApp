namespace api.Models
{
    public class Pet
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Age { get; set; }

        public int OwnerId { get; set; }
        public Owner? Owner { get; set; }

        public List<PetVaccine> PetVaccines { get; set; } = new List<PetVaccine>();
    }
}
