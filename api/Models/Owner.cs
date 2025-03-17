namespace api.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Age { get; set; }

        public List<Pet> Pets { get; set; }

        public string FullName => $"{Name} {Surname}";
    }
}
