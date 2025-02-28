namespace api.Dtos.Pet
{
    public class UpdatePetRequestDto
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public int OwnerId { get; set; }
        public List<int> VaccineIds { get; set; }
    }
}
