using D_T_Source.Configurations.Swagger.Filter;
using Microsoft.OpenApi.Models;

namespace D_T_Source.Configurations.Swagger
{
    public static class SwaggerConfiguration
    {
        public static IServiceCollection AddSwaggerConfiguration(this IServiceCollection services)
        {
            services.AddSwaggerGen(op => {
                op.EnableAnnotations();
                op.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Death Time.NET Api",
                    Description = "Api demo of .NET about Death Time Middleware"
                });
                op.SchemaFilter<SwaggerSchemaExampleFilter>();
            });
            return services;
        }
    }
}
