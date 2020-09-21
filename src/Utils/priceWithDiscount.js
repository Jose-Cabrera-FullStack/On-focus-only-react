export default function priceWithDiscount(price, priceOff) {
  let priceWithDiscount = 0;
  return parseInt((priceWithDiscount = price - price * (priceOff / 100)));
}
