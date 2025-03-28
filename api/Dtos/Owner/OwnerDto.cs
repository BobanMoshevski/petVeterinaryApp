﻿using api.Dtos.Pet;

namespace api.Dtos.Owner
{
    public class OwnerDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Age { get; set; }
        public string FullName => $"{Name} {Surname}";
        public List<PetsDto> Pets { get; set; }
    }
}
