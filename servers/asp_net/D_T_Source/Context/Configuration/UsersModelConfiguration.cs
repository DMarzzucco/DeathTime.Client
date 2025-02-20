using D_T_Source.User.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace D_T_Source.Context.Configuration
{
    public class UsersModelConfiguration : IEntityTypeConfiguration<UsersModel>
    {
        public void Configure(EntityTypeBuilder<UsersModel> builder)
        {
            builder.HasKey(row => row.Id);
            builder.Property(row => row.Id).UseIdentityColumn().ValueGeneratedOnAdd();
            builder.Property(row => row.Name).IsUnicode();
            builder.Property(row => row.Email).IsUnicode();

            builder.ToTable("User");
        }
    }
}
