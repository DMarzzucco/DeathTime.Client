using D_T_Source.Configurations.DbConfiguration.Extensions;
using D_T_Source.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddBuilderServicesExtensions(builder.Configuration);
builder.WebHost.UseUrls("http://*:8080");

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCutomExtensions();
app.ApplyMigrations();
app.MapControllers();
app.Run();