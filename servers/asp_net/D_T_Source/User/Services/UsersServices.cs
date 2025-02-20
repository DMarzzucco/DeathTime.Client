using AutoMapper;
using D_T_Source.User.DTOs;
using D_T_Source.User.Model;
using D_T_Source.User.Repoistory.Interface;
using D_T_Source.User.Services.Interface;
using D_T_Source.Utils.Exceptions;

namespace D_T_Source.User.Services
{
    public class UsersServices : IUserServices
    {
        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;

        public UsersServices(IUserRepository repository, IMapper mapper)
        {
            this._repository = repository;
            this._mapper = mapper;
        }

        public async Task DeleteUser(int id)
        {
            var user = await FindUserById(id);
            await this._repository.RemoveUserRegisterAsync(user);
        }

        public async Task<UsersModel> EditOneUser(int id, UpdateUserDTO body)
        {
            var user = await FindUserById(id);

            this._mapper.Map(body, user);

            await this._repository.EditUsersRegisterAsync(user);
            return user;
        }

        public async Task<UsersModel> FindUserById(int id)
        {
            var user = await this._repository.FindUserByIdAsync(id);
            if (user == null)
                throw new KeyNotFoundException("User not found");
            return user;
        }

        public async Task<IEnumerable<UsersModel>> ListOfAllRegister()
        {
            return await this._repository.ListUserRegisterAsync();
        }

        public async Task<UsersModel> RegisterUser(CreateUserDTO body)
        {
            if (this._repository.ExistsTheName (body.Name)) 
                throw new ConflictExceptions("The Name already Exists");

            if (this._repository.ExistsTheEmail(body.Email))
                throw new ConflictExceptions("The Email already Exists");

            var data = this._mapper.Map<UsersModel>(body);
            await this._repository.SaveUserAsync(data);
            return data;
        }
    }
}
