
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BlogApi.Models;
using BlogApi.Services;
// using server;

namespace BlogApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogController : ControllerBase
    {
        private readonly BlogService _blogService;

        public BlogController(BlogService service)
        {
            _blogService = service;
        }

        // [HttpGet]
        // public List<Blog> Get(int id)
        // {
        //     return FakeData.getBlogs();
        // }
        
        [HttpGet]
        public List<Blog> Get()
        {
            List<Blog> ary = _blogService.Get();
            return ary;
        }
        
        [HttpGet("{id:length(24)}", Name="blog")]
        public Blog Get(string id)
        {
            var blog = _blogService.Get(id);
            if(blog == null)
            {
                return null;
            }
            return blog;
        }

        [HttpPost]
        public ActionResult<Blog> Create([FromForm] Blog blog)
        {
            blog.createdAt = DateTime.UtcNow.ToString("yyyy-MM-dd h:mm:ss");
          
            _blogService.Create(blog);

            return blog;
            //return CreatedAtRoute("blog", new {id = blog._id.ToString()}, blog);
        }
        /*
            Reserved Area for Create, Update and Delete Service.

            [HttpPost]
            public ActionResult<Blog> Create(Blog blog)
            {
                _blogService.Create(blog);
                return CreatedAtRoute("blog", new {id = blog._id.ToString()}, blog);
            }
            
            ...
        */
    }
}
