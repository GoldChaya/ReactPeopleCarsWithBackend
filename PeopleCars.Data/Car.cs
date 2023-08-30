using System.Text.Json.Serialization;
using System;

namespace PeopleCars.Data
{
    public class Car
    {
        public int Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public int PersonId { get; set; }
        [JsonIgnore]
        public Person person { get; set; }

    }
}