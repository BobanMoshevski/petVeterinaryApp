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
        [Range(18, 100, ErrorMessage = "Age must be between 18 and 100.")]
        public int Age { get; set; }
    }
}
