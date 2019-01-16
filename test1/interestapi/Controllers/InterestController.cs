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
        private static int sumi = 0;

        [HttpPost]
        public void Post([FromBody] refund refund)
        {
            int summ = new logic().result(refund.Money, refund.Interest);
                summ = 0;
            for (int i = 1; i <= refund.Year; i++)
            {
                var refundgroup = new refund
                {
                    Year = Counter++,
                    Money = refund.Money += summ,
                    Interests = refund.Interest,
                    Interest = ((refund.Money += summ)*refund.Interest)/100,
                    Pay = refund.Money += (new logic().result(refund.Money += summ, refund.Interest)),
                };
                refunds.Add(refundgroup);
            };

        }
        
        [HttpGet]
        public ActionResult<IEnumerable<refund>> Get()
        {
            return refunds;
        }
    }
}
