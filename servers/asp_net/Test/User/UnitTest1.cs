using D_T_Source.User.Controller;
using D_T_Source.User.Model;
using D_T_Source.User.Services.Interface;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Test.Mock;

namespace Test.User
{
    public class UnitTest1
    {
        private readonly Mock<IUserServices> _services;
        private readonly UsersController _controller;
        public UnitTest1()
        {
            _services = new Mock<IUserServices>();
            _controller = new UsersController(_services.Object);
        }

        [Fact]
        public async Task ShouldRegisteraUser()
        {
            var body = UsersMock.CreateUserMock;
            var user = UsersMock.UsersModelMock;
            _services.Setup(s => s.RegisterUser(body)).ReturnsAsync(user);

            var res = await _controller.RegisterUser(body);
            var result = Assert.IsType<CreatedAtActionResult>(res.Result);

            Assert.NotNull(result);
            Assert.Equal(201, result.StatusCode);
            Assert.Equal(user, result.Value);
        }
        [Fact]
        public async Task ShouldListAllUserRegister()
        {
            var list = new List<UsersModel> { UsersMock.UsersModelMock };
            var user = UsersMock.UsersModelMock;

            _services.Setup(s => s.ListOfAllRegister()).ReturnsAsync(list);
            var res = await _controller.ListOfAll();
            var result = Assert.IsType<OkObjectResult>(res.Result);

            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal(list, result.Value);
        }
        [Fact]
        public async Task ShoudlGiveOneUserRegister()
        {
            var user = UsersMock.UsersModelMock;
            var id = 1;
            _services.Setup(s => s.FindUserById(id)).ReturnsAsync(user);
            var res = await _controller.OneRegister(id);
            var result = Assert.IsType<OkObjectResult>(res.Result);
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.Equal(user, result.Value);
        }
        [Fact]
        public async Task ShouldEditOneUserRegister()
        {
            var body = UsersMock.UpdateUsersMock;
            var id = 1;
            var user = UsersMock.UsersModelMock;

            _services.Setup(s => s.EditOneUser(id, body)).ReturnsAsync(user);
            var res = await _controller.EditUserRegister(id, body) as NoContentResult;
            Assert.NotNull(res);
            Assert.Equal(204, res.StatusCode);
        }
        [Fact]
        public async Task ShouldDeleteOneUserRegister()
        {
            var user = UsersMock.UsersModelMock;
            var id = 1;
            _services.Setup(s => s.DeleteUser(id)).Returns(Task.CompletedTask);
            var res = await _controller.RemoveUser(id) as NoContentResult;
            Assert.NotNull(res);
            Assert.Equal(204, res.StatusCode);
        }
    }
}