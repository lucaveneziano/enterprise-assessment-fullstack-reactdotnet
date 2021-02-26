using System;
using System.Text.Json;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BlogApi.Models
{
    [BsonIgnoreExtraElements]
    public class Blog
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string _id { get; set; }        

        // [BsonElement("Name")]
        public string createdAt { get; set; }

        public int views { get; set; }

        public string author { get; set; }

        public string body { get; set; }

        public string imageUrl { get; set; }

        public string title { get; set; }

        public override string ToString()
        {
            return JsonSerializer.Serialize(this);
        }

    }
}
