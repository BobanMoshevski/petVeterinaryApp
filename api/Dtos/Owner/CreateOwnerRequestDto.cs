namespace api.Dtos.Owner
{
    public class CreateOwnerRequestDto
    {
        public string Name { get; set; } = string.Empty;
        public string Surname { get; set; } = string.Empty;
        public int Age { get; set; }
    }
}
