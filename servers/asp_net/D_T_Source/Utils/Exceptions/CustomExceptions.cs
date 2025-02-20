namespace D_T_Source.Utils.Exceptions
{
    public class ConflictExceptions : Exception
    {
        public ConflictExceptions(string message) : base(message)
        {

        }
    }

    public class BadRequestExceptioin : Exception
    {
        public BadRequestExceptioin(string message) : base(message)
        {

        }
    }
}
