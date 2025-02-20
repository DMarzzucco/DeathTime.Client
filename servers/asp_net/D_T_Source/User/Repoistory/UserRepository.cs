using D_T_Source.Context;
using D_T_Source.User.Model;
using D_T_Source.User.Repoistory.Interface;
using Microsoft.EntityFrameworkCore;

namespace D_T_Source.User.Repoistory
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _context;
        public UserRepository(AppDbContext context)
        {
            this._context = context;
        }

        public async Task EditUsersRegisterAsync(UsersModel body)
        {
            this._context.UserModel.Entry(body).State = EntityState.Modified;
            await this._context.SaveChangesAsync();
        }

        public bool ExistsTheEmail(string Email)
        {
            return this._context.UserModel.Any(u => u.Email == Email);
        }

        public bool ExistsTheName(string Name)
        {
            return this._context.UserModel.Any(u => u.Name == Name);
        }

        public async Task<UsersModel> FindUserByIdAsync(int id)
        {
            var user = await this._context.UserModel.FindAsync(id);
            return user;
        }

        public async Task<IEnumerable<UsersModel>> ListUserRegisterAsync()
        {
            return await this._context.UserModel.ToListAsync();
        }

        public async Task RemoveUserRegisterAsync(UsersModel body)
        {
            this._context.UserModel.Remove(body);
            await this._context.SaveChangesAsync();
        }

        public async Task SaveUserAsync(UsersModel body)
        {
            this._context.UserModel.Add(body);
            await this._context.SaveChangesAsync();
        }

    }
}
