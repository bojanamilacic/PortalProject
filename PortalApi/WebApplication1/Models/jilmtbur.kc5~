using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class MessageContext : DbContext
    {
        public MessageContext(DbContextOptions<MessageContext> options) : base(options)
        {

        }
        public DbSet<Message> Message { get; set; }
        public DbSet<Comment> Comment { get; set; }
    }
}
