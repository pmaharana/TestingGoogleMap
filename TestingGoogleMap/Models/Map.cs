using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestingGoogleMap.Models
{
    public class Map
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public double? Lat { get; set; }
        public double? Long { get; set; }
        public string Address { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
    }
}