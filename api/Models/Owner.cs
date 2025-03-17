namespace api.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Surname { get; set; } = string.Empty;
        public int Age { get; set; }

        public List<Pet> Pets { get; set; } = new List<Pet>();

        public string FullName => $"{Name} {Surname}";
    }
}
