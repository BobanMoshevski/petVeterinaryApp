using api.Dtos.Vaccine;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/")]
    [ApiController]
    public class VaccineController : ControllerBase
    {
        private readonly IVaccineRepository _vaccineRepo;
        public VaccineController(IVaccineRepository vaccineRepo)
        {
            _vaccineRepo = vaccineRepo;
        }

        [HttpGet]
        [Route("vaccines")]
        public async Task<IActionResult> GetAllVaccines([FromQuery] VaccineQueryObject query)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var vaccines = await _vaccineRepo.GetAllVaccines(query);
            var vaccineDto = vaccines.Select(v => v.ToVaccineDto());
            return Ok(vaccineDto);
        }

        [HttpGet]
        [Route("vaccine/{id:int}")]
        public async Task<IActionResult> GetVaccineById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var vaccine = await _vaccineRepo.GetVaccineById(id);

            if (vaccine == null)
            {
                return NotFound();
            }

            return Ok(vaccine.ToVaccineDto());
        }

        [HttpPost]
        [Route("vaccine")]
        public async Task<IActionResult> CreateVaccine([FromBody] CreateVaccineRequestDto vaccineDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var vaccineModel = vaccineDto.ToVaccineFromCreateDto();
            await _vaccineRepo.CreateVaccine(vaccineModel);
            return CreatedAtAction(nameof(GetVaccineById), new { id = vaccineModel.Id }, vaccineModel.ToVaccineDto());
        }

        [HttpPut]
        [Route("vaccine/{id:int}")]
        public async Task<IActionResult> UpdateVaccine([FromRoute] int id, [FromBody] UpdateVaccineRequestDto updateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var vaccineModel = await _vaccineRepo.UpdateVaccine(id, updateDto);

            if (vaccineModel == null)
            {
                return NotFound();
            }

            return Ok(vaccineModel.ToVaccineDto());
        }

        [HttpDelete]
        [Route(("vaccine/{id:int}"))]
        public async Task<IActionResult> DeleteVaccine([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var vaccineModel = await _vaccineRepo.DeleteVaccine(id);

            if (vaccineModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpGet]
        [Route("totalVaccines")]
        public async Task<IActionResult> GetTotalVaccines()
        {
            var total = await _vaccineRepo.GetTotalVaccines();
            return Ok(new { totalVaccines = total });
        }
    }
}
