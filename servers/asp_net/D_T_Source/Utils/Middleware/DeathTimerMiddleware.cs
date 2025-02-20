using D_T_Source.Context;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace D_T_Source.Utils.Middleware
{
    public class DeathTimerMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<DeathTimerMiddleware> _logger;
        private readonly IServiceScopeFactory _scopeFactory;

        public DeathTimerMiddleware(RequestDelegate next, ILogger<DeathTimerMiddleware> logger, IServiceScopeFactory scopeFactory)
        {
            this._next = next;
            this._logger = logger;
            this._scopeFactory = scopeFactory;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                var currentTime = DateTime.Now;
                var deathTimer = DateTime.ParseExact("0000-00-00T00:00:00", "yyyy-MM-ddTHH:mm:ss", CultureInfo.InvariantCulture, DateTimeStyles.None);
                if (currentTime > deathTimer)
                {
                    using (var scope = this._scopeFactory.CreateScope())
                    {
                        var ctx = scope.ServiceProvider.GetRequiredService<AppDbContext>();
                        await ctx.UserModel.ExecuteDeleteAsync();
                    }
                    this._logger.LogInformation("the dead line has passed, clearing users.");
                    context.Response.StatusCode = StatusCodes.Status403Forbidden;
                    await context.Response.WriteAsJsonAsync(new { message = "Time hab expired" });
                    return;
                }
            }
            catch (Exception ex) {
                this._logger.LogError(ex, "Ah error ocurred");
                context.Response.StatusCode = StatusCodes.Status500InternalServerError;
                await context.Response.WriteAsJsonAsync(new { message = $"Server {ex.Message}"});
            }
            await this._next(context);
        }
    }
}
