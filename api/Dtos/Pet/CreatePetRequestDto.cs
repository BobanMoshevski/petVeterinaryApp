using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Pet
{
    public class CreatePetRequestDto
    {
        [Required]
        [MinLength(2, ErrorMessage = "Name must be at least 2 characters long.")]
        [MaxLength(30, ErrorMessage = "Name cannot exceed 30 characters.")]
        public string Name { get; set; }
        [Required]
        [Range(0, 50, ErrorMessage = "Age must be between 0 and 50.")]
        public int Age { get; set; }
        public List<int> VaccineIds { get; set; }
    }
}
