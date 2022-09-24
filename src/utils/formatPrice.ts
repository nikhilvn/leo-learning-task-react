function formatPrice(amount: number) {
  if (amount > 100) {
    return `£${(amount / 100).toFixed(2)}`;
  } else {
    return `${amount}p`;
  }
}

export default formatPrice;
