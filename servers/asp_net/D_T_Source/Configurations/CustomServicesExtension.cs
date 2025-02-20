using D_T_Source.User.Repoistory;
using D_T_Source.User.Repoistory.Interface;
using D_T_Source.User.Services;
using D_T_Source.User.Services.Interface;
using D_T_Source.Utils.Filter;

namespace D_T_Source.Configurations
{
    public static class CustomServicesExtension
    {
        public static IServiceCollection AddCustomServices(this IServiceCollection service) {

            service.AddScoped<GlobalFilterExceptions>();
            service.AddScoped<IUserRepository, UserRepository>();
            service.AddScoped<IUserServices, UsersServices>();
            return service;
        }
    }
}
