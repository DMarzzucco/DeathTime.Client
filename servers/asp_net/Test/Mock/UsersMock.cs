
using D_T_Source.User.DTOs;
using D_T_Source.User.Model;

namespace Test.Mock
{
    public static class UsersMock
    {
        public static UsersModel UsersModelMock = new UsersModel
        {
            Id = 1,
            Name = "Dario",
            Email = "dar@gmail.com",
            Age = "25"
        };
        public static CreateUserDTO CreateUserMock = new CreateUserDTO
        {
            Name = "Dario",
            Email = "dar@gmail.com",
            Age = "25"
        };
        public static UpdateUserDTO UpdateUsersMock = new UpdateUserDTO
        {
            Name = "Dario",
            Email = "dar@gmail.com",
            Age = "25"
        };
    }
}
