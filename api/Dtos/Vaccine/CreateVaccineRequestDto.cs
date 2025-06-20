using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Vaccine
{
    public class CreateVaccineRequestDto
    {
        [Required]
        [MinLength(2, ErrorMessage = "Name must be at least 2 characters long.")]
        [MaxLength(60, ErrorMessage = "Name cannot exceed 60 characters.")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Manufacturer is required.")]
        [MaxLength(100, ErrorMessage = "Manufacturer cannot exceed 100 characters.")]
        public string Manufacturer { get; set; }
        [Required(ErrorMessage = "Batch number is required.")]
        [MaxLength(50, ErrorMessage = "Batch number cannot exceed 50 characters.")]
        public string BatchNumber { get; set; }
        [Required(ErrorMessage = "Expiration date is required.")]
        [FutureDate(ErrorMessage = "Expiration date must be in the future.")]
        public DateTime ExpirationDate { get; set; }
        [MaxLength(500, ErrorMessage = "Description cannot exceed 500 characters.")]
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }

    public class FutureDate : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value is not DateTime date)
                return new ValidationResult("Invalid date format.");

            if (date <= DateTime.Today)
                return new ValidationResult(ErrorMessage ?? "Date must be in the future.");

            return ValidationResult.Success;
        }
    }
}
