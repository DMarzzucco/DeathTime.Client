using D_T_Source.Context.Configuration;
using D_T_Source.User.Model;
using Microsoft.EntityFrameworkCore;

namespace D_T_Source.Context
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {
        }

        public DbSet<UsersModel> UserModel { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsersModelConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
