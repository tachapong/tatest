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
        private static List<order> Order = new List<order>();


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

        [HttpGet]
        public ActionResult<IEnumerable<order>> Get()
        {
            return Orders;
        }

        [HttpPost("{xx}")]
        public void Post2([FromBody] order orders)
        {
            var ordersgroup = new order
            {
                Product = orders.Product,
                Price = orders.Price,
                Amount = orders.Amount,
                Sum = orders.Sum,
            };
            Order.Add(ordersgroup);
        }

        [HttpGet("{xx}")]
        public ActionResult<IEnumerable<order>> Get2()
        {
            return Order;
        }
    }
}
