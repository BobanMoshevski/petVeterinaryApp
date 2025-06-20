namespace api.Models
{
    public class Pet
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Species { get; set; }
        public string Breed { get; set; }
        public string Gender { get; set; }
        public float Weight { get; set; }
        public int OwnerId { get; set; }
        public Owner Owner { get; set; }
        public List<PetVaccine> PetVaccines { get; set; }
        public int Age =>
            DateTime.Today.Year - DateOfBirth.Year -
            (DateTime.Today.DayOfYear < DateOfBirth.DayOfYear ? 1 : 0);
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
