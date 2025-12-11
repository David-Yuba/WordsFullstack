using System.ComponentModel.DataAnnotations;

namespace Words.Server.Models;
public class Blog
{
    [Key]
    public int Blog_ID { get; set; }
    public string? Title { get; set; }
    public DateOnly Date_created { get; set; }
    public string? Written_by { get; set; }
    public string? Img { get; set; }
    public IList<string>? Tags { get; set; }
    public string? Short_description { get; set; }
    public string? Content { get; set; }
}
