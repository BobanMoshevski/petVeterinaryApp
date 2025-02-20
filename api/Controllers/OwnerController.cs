using api.Dtos.Owner;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        private readonly IOwnerRepository _ownerRepo;
        public OwnerController(IOwnerRepository ownerRepo)
        {
            _ownerRepo = ownerRepo;
        }

        [HttpGet]
        [Route("owners")]
        public async Task<IActionResult> GetAllOwners()
        {
            var owners = await _ownerRepo.GetAllOwners();
            var ownerDto = owners.Select(o => o.ToOwnerDto());
            return Ok(ownerDto);
        }

        [HttpGet]
        [Route("owner/{id}")]
        public async Task<IActionResult> GetOwnerById([FromRoute] int id)
        {
            var owner = await _ownerRepo.GetOwnerById(id);

            if (owner == null)
            {
                return NotFound();
            }

            return Ok(owner.ToOwnerDto());
        }

        [HttpPost]
        [Route("owner")]
        public async Task<IActionResult> CreateOwner([FromBody] CreateOwnerRequestDto ownerDto)
        {
            var ownerModel = ownerDto.ToOwnerFromCreateDto();
            await _ownerRepo.CreateOwner(ownerModel);
            return CreatedAtAction(nameof(GetOwnerById), new { id = ownerModel.Id }, ownerModel.ToOwnerDto());
        }

        [HttpPut]
        [Route("owner/{id}")]
        public async Task<IActionResult> UpdateOwner([FromRoute] int id, [FromBody] UpdateOwnerRequestDto updateDto)
        {
            var ownerModel = await _ownerRepo.UpdateOwner(id, updateDto);

            if (ownerModel == null)
            {
                return NotFound();
            }

            return Ok(ownerModel.ToOwnerDto());

        }

        [HttpDelete]
        [Route(("owner/{id}"))]
        public async Task<IActionResult> DeleteOwner([FromRoute] int id)
        {
            var ownerModel = await _ownerRepo.DeleteOwner(id);

            if (ownerModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
