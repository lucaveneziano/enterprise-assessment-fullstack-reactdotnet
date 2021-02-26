namespace BlogApi.Models
{
    public class BlogDatabseSettings : IBlogDatabseSettings
    {
        public string BlogsCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabseName { get; set; }
    }

    public interface IBlogDatabseSettings
    {
        string BlogsCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabseName { get; set; }
    }
}