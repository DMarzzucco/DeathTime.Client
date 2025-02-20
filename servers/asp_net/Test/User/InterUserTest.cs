using AutoMapper;
using D_T_Source.User.DTOs;
using D_T_Source.User.Model;
using D_T_Source.User.Repoistory.Interface;
using D_T_Source.User.Services;
using Moq;
using Test.Mock;
namespace Test.User
{
    public class InterUserTest
    {
        private readonly Mock<IUserRepository> _repository;
        private readonly IMapper _mapper;
        private readonly UsersServices _service;

        public InterUserTest()
        {
            this._repository = new Mock<IUserRepository>();
            var mapconf = new MapperConfiguration(c =>
            {
                c.CreateMap<CreateUserDTO, UsersModel>();
                c.CreateMap<UpdateUserDTO, UsersModel>();
            });
            this._mapper = mapconf.CreateMapper();

            this._service = new UsersServices(this._repository.Object, this._mapper);
        }

        [Fact]
        public async Task ShoudlDeleteOneUser() {
            var user = UsersMock.UsersModelMock;
            var id = 1;
            this._repository.Setup(r => r.RemoveUserRegisterAsync(user)).Returns(Task.CompletedTask);
            var res = this._service.DeleteUser(id);
            Assert.NotNull(res);
        }
        [Fact]
        public async Task ShouldEditOneUser() {
            var id = 1;
            var body = UsersMock.UpdateUsersMock;
            var user = UsersMock.UsersModelMock;
            this._repository.Setup(r => r.FindUserByIdAsync(id)).ReturnsAsync(user);
            this._repository.Setup(r => r.EditUsersRegisterAsync(user)).Returns(Task.CompletedTask);
            var res = await this._service.EditOneUser(id, body) as UsersModel;
            Assert.NotNull(res);
            Assert.Equal(user.Id, res.Id);
        }
        [Fact]
        public async Task ShouldFindOneUser() {
            var id = 1;
            var user = UsersMock.UsersModelMock;
            this._repository.Setup(r => r.FindUserByIdAsync(id)).ReturnsAsync(user);
            var res = await this._service.FindUserById(id) as UsersModel;
            Assert.NotNull(res);
            Assert.Equal(user.Id, res.Id);
        }
        [Fact]
        public async Task ShouldGiveAllUserRegister() {
            var list = new List<UsersModel> { UsersMock.UsersModelMock };
            this._repository.Setup(r => r.ListUserRegisterAsync()).ReturnsAsync(list);
            var res = await this._service.ListOfAllRegister() as IEnumerable<UsersModel>;
            Assert.NotNull(res);
            Assert.Equal(list, res);
        }
        [Fact]
        public async Task ShouldRegisterOneUSer() {
            var body = UsersMock.CreateUserMock;
            var user = UsersMock.UsersModelMock;
            this._repository.Setup(r => r.SaveUserAsync(user)).Returns(Task.CompletedTask);
            var res = await this._service.RegisterUser(body) as UsersModel;
            Assert.NotNull(res);
        }
    }
}
