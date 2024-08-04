using CRUD_using_AJAX.Data;
using Microsoft.AspNetCore.Mvc;

namespace CRUD_using_AJAX.Controllers
{
    public class AjaxController : Controller
    {
        private readonly ApplicationDbContext context;

        public AjaxController(ApplicationDbContext context)
        {
            this.context = context;
        }
        public IActionResult Index()
        {
            return View();
        }

        public JsonResult getAllUser()
        {
            var data = context.Users.ToList();
            return new JsonResult(data);
        }
    }
}
