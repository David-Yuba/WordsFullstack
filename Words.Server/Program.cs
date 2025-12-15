using Microsoft.EntityFrameworkCore;
using Words.Server.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi

var connectionString = builder.Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING")
    ?? throw new InvalidOperationException("Connectionstring" + "'AZURE_SQL_CONNECTIONSTRING' not found.");

builder.Services.AddDbContext<BlogContext>(opt =>
    opt.UseSqlServer(connectionString));

var app = builder.Build();

// Serve static files from wwwroot
app.UseDefaultFiles();
app.UseStaticFiles();

app.UseRouting();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{ 
    app.UseOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

// Map API controllers first so they are not shadowed by the SPA fallback
app.MapControllers();

// Fallback to the SPA index.html for non-API routes
app.MapFallbackToFile("/index.html");

app.Run();