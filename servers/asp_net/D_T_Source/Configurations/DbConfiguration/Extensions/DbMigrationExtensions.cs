using D_T_Source.Context;
using Microsoft.EntityFrameworkCore;

namespace D_T_Source.Configurations.DbConfiguration.Extensions
{
    public static class DbMigrationExtensions
    {
        public static void ApplyMigrations(this IHost app) {
            using var scope = app.Services.CreateScope();
            var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
            dbContext.Database.Migrate();
        }
    }
}
