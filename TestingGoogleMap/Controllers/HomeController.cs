using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using TestingGoogleMap.Models;

namespace TestingGoogleMap.Controllers
{
    public class HomeController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();


        public async Task<ActionResult> Index()
        {
            return View(await db.Maps.ToListAsync());
        }


        [System.Web.Mvc.Authorize]
        public async Task<ActionResult> About()
        {

            
            return View(await db.Maps.ToListAsync());
        }

        public async Task<ActionResult> Contact()
        {
            return View(await db.Maps.ToListAsync());
        }
    }
}