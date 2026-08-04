function CalculateBill(PricePerItem, quantity, discountPercent){
    const total = PricePerItem * quantity;
    const discount_total = total-(discountPercent/100*total);
    const tax = 5/100*discount_total;
    return discount_total + tax;
}
console.log(CalculateBill(100, 3, 10))
