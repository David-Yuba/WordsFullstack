using Microsoft.EntityFrameworkCore;
using Words.Server.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var connectionString = builder.Configuration.GetConnectionString("LOCAL_DEVELOPMENT_CONNECTIONSTRING")
    ?? throw new InvalidOperationException("Connectionstring" + "'LOCAL_DEVELOPMENT_CONNECTIONSTRING' not found.");

builder.Services.AddDbContext<BlogContext>(opt =>
    opt.UseSqlServer(connectionString));

var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{ 
    app.UseOpenApi();
}

app.UseHttpsRedirection();

//string connectionString = app.Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING")!;

//try
//{
//    using var conn = new SqlConnection(connectionString);
//    conn.Open();
//    var command = new SqlCommand("CREATE TABLE Persons (ID int NOT NULL PRIMARY KEY IDENTITY, FirstName varchar(255), LastName varchar(255))", conn);
//    using SqlDataReader reader = command.ExecuteReader();

//}
//catch (Exception e)
//{
//    Console.WriteLine(e.Message);
//}

app.UseAuthorization();

app.MapFallbackToFile("/index.html");

app.MapControllers();

app.Run();