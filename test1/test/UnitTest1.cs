using System;
using interestapi;
using Xunit;

namespace test
{
    public class UnitTest1
    {
        [Theory]
        [InlineData(100,10,10)]
        [InlineData(1000,12,120)]
        public void Test1(int number,int number2 ,int expected)
        {
           var sut =  new logic();
           var result = sut.result(number, number2);
           Assert.Equal(expected, result);
               }
    }
}
