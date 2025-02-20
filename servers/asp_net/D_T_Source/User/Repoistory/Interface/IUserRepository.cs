using D_T_Source.User.Model;

namespace D_T_Source.User.Repoistory.Interface
{
    public interface IUserRepository
    {
        Task SaveUserAsync(UsersModel body);
        Task<IEnumerable<UsersModel>> ListUserRegisterAsync();
        Task<UsersModel> FindUserByIdAsync(int id);
        Task EditUsersRegisterAsync(UsersModel body);
        Task RemoveUserRegisterAsync(UsersModel body);
        bool ExistsTheName(string Name);
        bool ExistsTheEmail(string Email);

    }
}
