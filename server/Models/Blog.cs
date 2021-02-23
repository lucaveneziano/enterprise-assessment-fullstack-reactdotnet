using System;
using System.Text.Json;

namespace server
{
    public class Blog
    {
        public DateTime createdAt { get; set; }

        public int views { get; set; }

        public string author { get; set; }

        public string body { get; set; }

        public string imageUrl { get; set; }

        public string title { get; set; }

        public string _id { get; set; }

        public override string ToString()
        {
            return JsonSerializer.Serialize(this);
        }

    }
}
