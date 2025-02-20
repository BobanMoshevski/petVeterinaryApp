namespace api.Dtos.Owner
{
    public class OwnerDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Surname { get; set; } = string.Empty;
        public int Age { get; set; }
        public string FullName => $"{Name} {Surname}";
    }
}
