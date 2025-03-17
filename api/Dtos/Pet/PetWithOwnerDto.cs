namespace api.Dtos.Pet
{
    public class PetWithOwnerDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Age { get; set; }
        public string FullName => $"{Name} {Surname}";
    }
}
