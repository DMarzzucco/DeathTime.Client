namespace D_T_Source.Configurations
{
    public static class CorsConfigurations
    {
        public static IServiceCollection AddCorsConfigurations(this IServiceCollection service)
        {
            service.AddCors(op =>
            {
                op.AddPolicy("DeathTimerCors", b =>
                {
                    b.WithOrigins("http://localhost:3000")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials();
                });
            });

            return service;
        }
    }
}
