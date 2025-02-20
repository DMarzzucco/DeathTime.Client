using D_T_Source.User.DTOs;
using D_T_Source.User.Model;
using D_T_Source.User.Services.Interface;
using Microsoft.AspNetCore.Mvc;

namespace D_T_Source.User.Controller
{
    [Route ("api/[controller]")]
    [ApiController]
    public class UsersController:ControllerBase
    {
        private readonly IUserServices _services;
        public UsersController(IUserServices services)
        {
            this._services = services;
        }

        [HttpPost]
        public async Task<ActionResult<UsersModel>> RegisterUser([FromBody] CreateUserDTO body) {
            var user = await this._services.RegisterUser(body);
            return CreatedAtAction(nameof (ListOfAll), new { id = user.Id}, user);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UsersModel>>> ListOfAll() {
            return Ok(await this._services.ListOfAllRegister());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<UsersModel>> OneRegister(int id) {
            return Ok(await this._services.FindUserById(id));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> EditUserRegister(int id, [FromBody] UpdateUserDTO body) {
            await this._services.EditOneUser(id, body);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> RemoveUser(int id) {
            await this._services.DeleteUser(id);
            return NoContent();
        }
    }
}
