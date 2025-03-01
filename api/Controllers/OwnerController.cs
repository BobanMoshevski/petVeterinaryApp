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
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var owners = await _ownerRepo.GetAllOwners();
            var ownerDto = owners.Select(o => o.ToOwnerDto());
            return Ok(ownerDto);
        }

        [HttpGet]
        [Route("owner/{id:int}")]
        public async Task<IActionResult> GetOwnerById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

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
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var ownerModel = ownerDto.ToOwnerFromCreateDto();
            await _ownerRepo.CreateOwner(ownerModel);
            return CreatedAtAction(nameof(GetOwnerById), new { id = ownerModel.Id }, ownerModel.ToOwnerDto());
        }

        [HttpPut]
        [Route("owner/{id:int}")]
        public async Task<IActionResult> UpdateOwner([FromRoute] int id, [FromBody] UpdateOwnerRequestDto updateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var ownerModel = await _ownerRepo.UpdateOwner(id, updateDto);

            if (ownerModel == null)
            {
                return NotFound();
            }

            return Ok(ownerModel.ToOwnerDto());

        }

        [HttpDelete]
        [Route(("owner/{id:int}"))]
        public async Task<IActionResult> DeleteOwner([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var ownerModel = await _ownerRepo.DeleteOwner(id);

            if (ownerModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
