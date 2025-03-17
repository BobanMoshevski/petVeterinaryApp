namespace api.Dtos.Pet
{
    public class CreatePetRequestDto
    {
        public string Name { get; set; }
        public int Age { get; set; }
        public List<int> VaccineIds { get; set; }
    }
}
