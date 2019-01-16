using System.Collections.Generic;
using productapi.Models;

namespace shopapi.Models
{
     public class Grouporder
    {
        public List<order> OrderGroup { get; set; }
        public double Discount { get; set; }
    }

}