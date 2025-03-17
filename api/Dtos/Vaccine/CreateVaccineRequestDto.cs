using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Vaccine
{
    public class CreateVaccineRequestDto
    {
        [Required]
        [MinLength(2, ErrorMessage = "Name must be at least 2 characters long.")]
        [MaxLength(60, ErrorMessage = "Name cannot exceed 60 characters.")]
        public string Name { get; set; }
    }
}
