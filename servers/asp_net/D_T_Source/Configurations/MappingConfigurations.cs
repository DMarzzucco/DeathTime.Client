using AutoMapper;
using D_T_Source.Mapper;

namespace D_T_Source.Configurations
{
    public static class MappingConfigurations
    {
        public static IServiceCollection AddMapperConfigurations(this IServiceCollection service) {

            var mappConf = new MapperConfiguration(m => { m.AddProfile<MappingProfile>(); });

            IMapper mapper = mappConf.CreateMapper();

            service.AddSingleton(mapper);
            return service;
        }
    }
}
