using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using productapi.Models;

namespace productapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private static List<order> Orders = new List<order>();
        private static int Counter = 1;


        [HttpPost]
        public void Post([FromBody] order orders)
        {
            var ordergroup = new order
            {
                Product = orders.Product,
                Price = orders.Price,
                Amount = orders.Amount,
                Sum = orders.Price * orders.Amount,
            };
            Orders.Add(ordergroup);
        }
        
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<order>> Get()
        {
            return Orders;
        }
    }
}
