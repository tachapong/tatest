using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using interestapi.Models;
using Microsoft.AspNetCore.Mvc;

namespace interestapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InterestController : ControllerBase
    {
         private static List<refund> refunds = new List<refund>();
        private static int Counter = 1;
        [HttpPost]
        public void Post([FromBody] refund refund)
        {
            var refundgroup = new refund
            {
                Year = refund.Year++,
                Money= refund.Money,
                Interest = 0,
                Pay = 0,
                // Price = order.Price,
                // Sum = order.Amount * order.Price,
                // Group = new logic().result(order.Amount * order.Price)

            };
            refunds.Add(refundgroup);

        }

       
    }
}
