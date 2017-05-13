﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TestingGoogleMap.Models
{
    public class Map
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Lat { get; set; }
        public string Long { get; set; }
        public string Address { get; set; }
        public string Image { get; set; }
    }
}