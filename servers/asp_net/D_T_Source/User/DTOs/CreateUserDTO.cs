using D_T_Source.Configurations.Swagger.Attributes;
using Swashbuckle.AspNetCore.Annotations;

namespace D_T_Source.User.DTOs
{
    public class CreateUserDTO
    {
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
