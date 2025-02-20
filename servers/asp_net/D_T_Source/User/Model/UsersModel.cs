using D_T_Source.Configurations.Swagger.Attributes;
using Swashbuckle.AspNetCore.Annotations;

namespace D_T_Source.User.Model
{
    public class UsersModel
    {
        [SwaggerSchema("User id")]
        public int Id { get; set; }

        [SwaggerSchema("User Name")]
        [SwaggerSchemaExample("Dario")]
        public required string Name { get; set; }

        [SwaggerSchema("User Email")]
        [SwaggerSchemaExample("darm@gmial.com")]
        public required string Email { get; set; }

        [SwaggerSchema("User Age")]
        [SwaggerSchemaExample("28")]
        public required string Age { get; set; }
    }
}
