using D_T_Source.Utils.Filter;

namespace D_T_Source.Configurations
{
    public static class ControllerExtension
    {
        public static IServiceCollection AddCustomController(this IServiceCollection service) {

            service.AddControllers(op => {
                op.Filters.Add<GlobalFilterExceptions>();
            });
            return service;
        }
    }
}
