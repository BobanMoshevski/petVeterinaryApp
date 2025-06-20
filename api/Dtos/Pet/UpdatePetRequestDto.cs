using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Pet
{
    public class UpdatePetRequestDto
    {
        [Required]
        [MinLength(2, ErrorMessage = "Name must be at least 2 characters long.")]
        [MaxLength(30, ErrorMessage = "Name cannot exceed 30 characters.")]
        public string Name { get; set; }
        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "OwnerId must be greater than 0.")]
        public int OwnerId { get; set; }
        [Required]
        [PetDateOfBirthValidation(ErrorMessage = "Pet age must be between 0 and 50 years.")]
        public DateTime DateOfBirth { get; set; }
        [Required]
        [MaxLength(30)]
        public string Species { get; set; }
        [Required]
        [MaxLength(30)]
        public string Breed { get; set; }
        [Required]
        [RegularExpression("^(Male|Female)$", ErrorMessage = "Gender must be either 'Male' or 'Female'.")]
        public string Gender { get; set; }
        [Required]
        [Range(0.1, 500.0, ErrorMessage = "Weight must be between 0.1 and 500 kg.")]
        public float Weight { get; set; }
        public List<int> VaccineIds { get; set; }
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}
