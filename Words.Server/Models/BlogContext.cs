using Microsoft.EntityFrameworkCore;
using Words.Server.Models;

namespace Words.Server.Models;

public class BlogContext : DbContext
{
    public BlogContext(DbContextOptions<BlogContext> options)
        : base(options){ }

    public DbSet<Words.Server.Models.Blog> Blogs { get; set; } = default!;
}
