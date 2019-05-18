using System.Collections.Generic;
using sample_app.Controllers;

namespace sample_app.Models
{
    public class Menu
    {
        public string name { get; set; }

        public List<Component> components { get; set; }
    }
}