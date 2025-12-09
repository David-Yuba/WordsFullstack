using Microsoft.AspNetCore.Mvc;

namespace Words.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries =
        [
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        ];

        [HttpGet(Name = "GetWeatherForecast")]
        public string Get()
        {
            string text;
            try
            {
                using StreamReader reader = new("./Data/data.json");
                text = reader.ReadToEnd();
            }
            catch (Exception e)
            {
                text = "File not found";
                Console.WriteLine("The file could not be read:");
                Console.WriteLine(e.Message);
            }

            return text;
        }
    }
}
