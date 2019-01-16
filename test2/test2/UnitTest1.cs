using System;
using Productapi;
using Xunit;

namespace test2
{
    public class UnitTest1
    {
        [Theory]
        [InlineData(8, 10, 60)]
        [InlineData(7, 10, 60)]
        [InlineData(3, 10, 30)]
        public void Test1(int amount, int price, int expected)
        {
            var sut = new logic();
            var result = sut.result(amount, price);
            Assert.Equal(expected, result);
        }

    }
}
