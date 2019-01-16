namespace Productapi
{
    public class logic
    {
        public int result(int amount, int price)
        {
            return  (amount - (amount/4))*price;
            
        }
    }
}