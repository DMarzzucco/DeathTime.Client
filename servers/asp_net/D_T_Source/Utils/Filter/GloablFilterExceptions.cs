using D_T_Source.Utils.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace D_T_Source.Utils.Filter
{
    public class GlobalFilterExceptions : IExceptionFilter
    {
        private readonly ILogger<GlobalFilterExceptions> _logger;

        public GlobalFilterExceptions(ILogger<GlobalFilterExceptions> logger)
        {
            this._logger = logger;
        }

        public void OnException(ExceptionContext context)
        {
            this._logger.LogError(context.Exception, "An unhandled exception ocurred");
            var statusCodes = context.Exception switch
            {
                BadRequestExceptioin => 400,
                UnauthorizedAccessException => 401,
                KeyNotFoundException => 404,
                ConflictExceptions => 409,
                _ => 500
            };
            var response = new ErrorResponse
            {
                StatusCode = statusCodes,
                Message = statusCodes switch
                {
                    400 => context.Exception.Message,
                    401 => context.Exception.Message,
                    404 => context.Exception.Message,
                    409 => context.Exception.Message,
                    _ => context.Exception.Message,
                },
                Details = statusCode == 500 ?
                ctx.Exception.InnerException?.Message : null
            };
            context.Result = new ObjectResult(response) { StatusCode = statusCodes };
            context.ExceptionHandled = true;
        }

        public class ErrorResponse
        {
            public int StatusCode { get; set; }
            public required string Message { get; set; }
            public string? Details { get; set; }
        }
    }
}
