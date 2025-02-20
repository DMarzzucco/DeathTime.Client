using D_T_Source.Configurations.DbConfiguration.Helper;
using D_T_Source.Context;
using Microsoft.EntityFrameworkCore;

namespace D_T_Source.Configurations.DbConfiguration
{
    public static class DbConfigurations
    {
        public static IServiceCollection AddDbConfigurations(this IServiceCollection service, IConfiguration configuration) {

            var connectionString = configuration.GetConnectionString("Connection");

            DatabaseHelper.WaitForDatabaseAsync(connectionString).GetAwaiter().GetResult();

            service.AddDbContext<AppDbContext>(op => op.UseNpgsql(connectionString));

            return service;
        }
    }
}
