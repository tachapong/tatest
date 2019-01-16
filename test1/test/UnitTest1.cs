using System;
using interestapi;
using Xunit;

namespace test
{
    public class UnitTest1
    {
        [Theory]
        [InlineData(100,12)]
        [InlineData(1000,120)]
        public void Test1(int number, int expected)
        {
           var sut =  new logic();
           var result = sut.result(number);
           Assert.Equal(expected, result);
       

        }
    }
}
