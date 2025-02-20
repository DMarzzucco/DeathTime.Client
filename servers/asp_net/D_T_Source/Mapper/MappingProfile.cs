using AutoMapper;
using D_T_Source.User.DTOs;
using D_T_Source.User.Model;

namespace D_T_Source.Mapper
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<CreateUserDTO, UsersModel>();
            CreateMap<UpdateUserDTO, UsersModel>();
        }
    }
}
