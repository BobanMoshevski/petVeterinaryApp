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
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }

    public class PetDateOfBirthValidation : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value is not DateTime dob)
                return new ValidationResult("Invalid date format.");

            var today = DateTime.Today;
            var age = today.Year - dob.Year;
            if (dob > today.AddYears(-age)) age--;

            if (age < 0 || age > 50)
                return new ValidationResult(ErrorMessage ?? "Pet age must be between 0 and 50 years.");

            return ValidationResult.Success;
        }
    }
}
