using D_T_Source.User.DTOs;
using D_T_Source.User.Model;

namespace D_T_Source.User.Services.Interface
{
    public interface IUserServices
    {
        Task<UsersModel> RegisterUser(CreateUserDTO body);
        Task<IEnumerable<UsersModel>> ListOfAllRegister();
        Task<UsersModel> FindUserById(int id);
        Task<UsersModel> EditOneUser(int id, UpdateUserDTO body);
        Task DeleteUser(int id);
    }
}
