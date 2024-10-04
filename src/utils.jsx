export const getTotals = (cart) => {
  console.log(cart);
  let totalAmount = 0;
  let totalCost = 0;

  for (let item of cart.values()) {
    console.log(item);
    totalAmount += item.amount;
    totalCost += item.amount * item.price;
  }

  return { totalAmount, totalCost };
};
