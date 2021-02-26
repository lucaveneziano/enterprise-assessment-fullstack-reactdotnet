using BlogApi.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace BlogApi.Services
{
    public class BlogService
    {
        private readonly IMongoCollection<Blog> _blogs;

        public BlogService(IBlogDatabseSettings settings)
        {
            // var client = new MongoClient(settings.ConnectionString);
            var client = new MongoClient("mongodb://localhost:27017");
            // var database = client.GetDatabase(settings.DatabseName);
            var database = client.GetDatabase("blogmodo");
            
            // _blogs = database.GetCollection<Blog>(settings.BlogsCollectionName);
            _blogs = database.GetCollection<Blog>("blogs");
        }
        
        public List<Blog> Get()
        {
            List<Blog> ary = _blogs.Find(blog => true).ToList();
            return ary;
        }

        public Blog Get(string id)
        {
            Blog blog = _blogs.Find<Blog>(blog => blog._id == id).FirstOrDefault();
            
            // Increase viewed number
            blog.views ++;
            Update(id, blog);
            return blog;
        }

        public Blog Create(Blog blog)
        {
            _blogs.InsertOne(blog);
            return blog;
        }

        public void Update(string id, Blog blogIn) =>
            _blogs.ReplaceOne(blog => blog._id == id, blogIn);
        
        public void Remove(Blog blogIn) =>
            _blogs.DeleteOne(blog => blog._id == blogIn._id);

        public void Remove(string id) =>
            _blogs.DeleteOne(blog => blog._id == id);
    }
}