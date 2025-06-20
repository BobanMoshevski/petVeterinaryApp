using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Owner
{
    public class UpdateOwnerRequestDto
    {
        [Required]
        [MinLength(2, ErrorMessage = "Name must be at least 2 characters long.")]
        [MaxLength(30, ErrorMessage = "Name cannot exceed 30 characters.")]
        public string Name { get; set; }
        [Required]
        [MinLength(2, ErrorMessage = "Surname must be at least 2 characters long.")]
        [MaxLength(40, ErrorMessage = "Surname cannot exceed 40 characters.")]
        public string Surname { get; set; }
        [Required]
        [CustomDateOfBirthValidation(ErrorMessage = "Owner must be between 18 and 100 years old.")]
        public DateTime DateOfBirth { get; set; }
        [Required]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string Email { get; set; }
        [Required]
        [Phone(ErrorMessage = "Invalid phone number.")]
        [MinLength(7)]
        [MaxLength(20)]
        public string PhoneNumber { get; set; }
        [Required]
        [MaxLength(100)]
        public string Address { get; set; }
        [Required]
        [MaxLength(50)]
        public string Country { get; set; }
        [Required]
        [MaxLength(50)]
        public string City { get; set; }
        [Required]
        [MaxLength(20)]
        public string PostalCode { get; set; }
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}
