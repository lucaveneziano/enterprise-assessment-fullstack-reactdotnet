using System;
using System.Collections.Generic;
using server;

namespace server
{

    class FakeData
    {
        static private List<Blog> blogs = new List<Blog>() { };
        static public List<Blog> getBlogs()
        {
            if (blogs.Count > 0)
            {
                return blogs;
            }

            for (int i = 0; i < 5; i += 1)
            {
                var rand = new Random();

                var endDate = DateTime.Now;
                var startDate = endDate.AddDays(-7);
                TimeSpan timeSpan = endDate - startDate;
                TimeSpan newSpan = new TimeSpan(0, rand.Next(0, (int)timeSpan.TotalMinutes), 0);
                DateTime randomDate = startDate + newSpan;

                var blog = new Blog();
                blog.author = "Author" + i;
                blog.body = "In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam id dolor.\nClass aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris dictum facilisis augue. Fusce tellus. Pellentesque arcu. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus.\nEtiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu, urna. Nullam at arcu a est sollicitudin euismod. Praesent dapibus. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Nam sed tellus id magna elementum tincidunt. Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla.";
                blog.createdAt = randomDate;
                blog.views = 145;
                blog.title = "Random Blog Post - " + i;
                blog.imageUrl = "https://source.unsplash.com/1600x900/?corgi";
                blog._id = Guid.NewGuid().ToString();

                blogs.Add(blog);
            }


            return blogs;
        }
    }
}