using D_T_Source.Configurations;
using D_T_Source.Configurations.DbConfiguration;
using D_T_Source.Configurations.Swagger;

namespace D_T_Source.Extensions
{
    public static class BuilderServicesExtensions
    {
        public static IServiceCollection AddBuilderServicesExtensions(this IServiceCollection services, IConfiguration configurations) {

            services.AddDbConfigurations(configurations);
            services.AddCustomController();
            services.AddCustomServices();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerConfiguration();
            services.AddCorsConfigurations();
            services.AddMapperConfigurations();
            services.AddMvc();

            return services;
        }
    }
}
