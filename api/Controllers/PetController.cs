using api.Dtos.Pet;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/")]
    [ApiController]
    public class PetController : ControllerBase
    {
        private readonly IPetRepository _petRepo;
        private readonly IOwnerRepository _ownerRepo;
        public PetController(IPetRepository petRepo, IOwnerRepository ownerRepo)
        {
            _petRepo = petRepo;
            _ownerRepo = ownerRepo;
        }

        [HttpGet]
        [Route("pets")]
        public async Task<IActionResult> GetAllPets()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var pets = await _petRepo.GetAllPets();
            var petDto = pets.Select(p => p.ToPetDto());
            return Ok(petDto);
        }

        [HttpGet]
        [Route("pet/{id:int}")]
        public async Task<IActionResult> GetPetById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var pet = await _petRepo.GetPetById(id);

            if (pet == null)
            {
                return NotFound();
            }

            return Ok(pet.ToPetDto());
        }

        [HttpPost]
        [Route("pet/{ownerId:int}")]
        public async Task<IActionResult> CreatePet([FromRoute] int ownerId, CreatePetRequestDto petDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!await _ownerRepo.OwnerExists(ownerId))
            {
                return BadRequest("Owner does not exist");
            }

            var petModel = petDto.ToPetFromCreate(ownerId);
            var createdPet = await _petRepo.CreatePet(petModel, petDto.VaccineIds);

            if (createdPet == null)
            {
                return BadRequest("One or more vaccine IDs are invalid.");
            }

            return CreatedAtAction(nameof(GetPetById), new { id = petModel.Id }, petModel.ToPetsDto());
        }

        [HttpPut]
        [Route("pet/{id:int}")]
        public async Task<IActionResult> UpdatePet([FromRoute] int id, [FromBody] UpdatePetRequestDto updatePetDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!await _ownerRepo.OwnerExists(updatePetDto.OwnerId))
            {
                return BadRequest("Owner does not exist");
            }

            var petModel = await _petRepo.UpdatePet(id, updatePetDto.ToPetFromUpdate());

            if (petModel == null)
            {
                return NotFound("Pet not found");
            }

            return Ok(petModel.ToPetDto());
        }

        [HttpDelete]
        [Route("pet/{id:int}")]
        public async Task<IActionResult> DeletePet([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var petModel = await _petRepo.DeletePet(id);

            if (petModel == null)
            {
                return NotFound("Pet does not exist");
            }

            return Ok(petModel);
        }
    }
}
