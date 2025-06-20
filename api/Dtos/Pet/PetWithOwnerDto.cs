namespace api.Dtos.Pet
{
    public class PetWithOwnerDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string FullName => $"{Name} {Surname}";
        public int Age =>
            DateTime.Today.Year - DateOfBirth.Year -
            (DateTime.Today.DayOfYear < DateOfBirth.DayOfYear ? 1 : 0);
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
