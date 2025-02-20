using Npgsql;

namespace D_T_Source.Configurations.DbConfiguration.Helper
{
    public static class DatabaseHelper
    {
        public static async Task WaitForDatabaseAsync(string connectionString, int maxRetries = 10, TimeSpan? delay = null) {

            delay ??= TimeSpan.FromSeconds(5);

            for (int i = 1; i <= maxRetries; i++)
            {
                try {
                    using var connection = new NpgsqlConnection(connectionString);
                    await connection.OpenAsync();
                    Console.WriteLine("Database is ready to use");
                    return;

                } catch (Exception ex) {
                    Console.WriteLine($"Attemp {i}/{maxRetries} fails: Retry in {delay.Value.TotalSeconds} secons. Message: {ex.Message}");
                    await Task.Delay(delay.Value);
                }
            }
            throw new Exception("Could not connect to database");
        }
    }
}
