using D_T_Source.Configurations.Swagger.Attributes;
using Swashbuckle.AspNetCore.Annotations;

namespace D_T_Source.User.DTOs
{
    public class UpdateUserDTO
    {
        [SwaggerSchema("User Name")]
        [SwaggerSchemaExample("Dario")]
        public string? Name { get; set; }

        [SwaggerSchema("User Email")]
        [SwaggerSchemaExample("darm@gmial.com")]
        public string? Email { get; set; }

        [SwaggerSchema("User Age")]
        [SwaggerSchemaExample("28")]
        public string? Age { get; set; }
    }
}
