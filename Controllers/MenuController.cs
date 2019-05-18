using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using sample_app.Models;

namespace sample_app.Controllers
{
    [Route("api/[controller]")]
    public class MenuController : Controller
    {
        private static readonly List<Menu> Menus;

        static MenuController()
        {
            Menus = new List<Menu>
            {
                new Menu
                {
                    name = "Payment",
                    components = new List<Component>
                    {
                        new Component
                        {
                            name = "Fatura",
                            appLoadModule = "payment",
                            appLoadModuleComponent = "FaturaComponent"
                        }
                    }
                },
                new Menu
                {
                    name = "Transfer",
                    components = new List<Component>
                    {
                        new Component
                        {
                            name = "Eft",
                            appLoadModule = "transfer",
                            appLoadModuleComponent = "EftComponent"
                        },
                        new Component
                        {
                            name = "Havale",
                            appLoadModule = "transfer",
                            appLoadModuleComponent = "HavaleComponent"
                        }
                    }
                }
            };
        }

        [HttpGet("[action]")]
        public IEnumerable<Menu> Get()
        {
            return Menus;
        }
    }
}