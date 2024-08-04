using CRUD_using_AJAX.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUD_using_AJAX.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> option) : base(option)
        {

        }

        public DbSet<User> Users { get; set; }
    }
}
