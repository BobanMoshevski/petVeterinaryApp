using api.Dtos.Owner;
using api.Models;

namespace api.Interfaces
{
    public interface IOwnerRepository
    {
        Task<List<Owner>> GetAllOwners();
        Task<Owner?> GetOwnerById(int id);
        Task<Owner> CreateOwner(Owner ownerModel);
        Task<Owner?> UpdateOwner(int id, UpdateOwnerRequestDto ownerDto);
        Task<Owner?> DeleteOwner(int id);
    }
}
