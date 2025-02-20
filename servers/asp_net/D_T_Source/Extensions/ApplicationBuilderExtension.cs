using D_T_Source.Utils.Middleware;

namespace D_T_Source.Extensions
{
    public static class ApplicationBuilderExtension
    {
        public static IApplicationBuilder UseCutomExtensions(this IApplicationBuilder app) {

            app.UseMiddleware<DeathTimerMiddleware>();
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCors("DeathTimerCors");
            app.UseAuthorization();
            return app;
        }
    }
}
