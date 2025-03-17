using api.Dtos.Owner;
using api.Helpers;
using api.Models;

namespace api.Interfaces
{
    public interface IOwnerRepository
    {
        Task<List<Owner>> GetAllOwners(OwnerQueryObject query);
        Task<Owner?> GetOwnerById(int id);
        Task<Owner> CreateOwner(Owner ownerModel);
        Task<Owner?> UpdateOwner(int id, UpdateOwnerRequestDto ownerDto);
        Task<Owner?> DeleteOwner(int id);
        Task<bool> OwnerExists(int id);
    }
}
