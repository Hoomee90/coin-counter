export { getChange, toCents, calculateCoins }

const getChange = (amount) => calculateCoins(toCents(amount), {});

const toCents = (amount) => Math.round(amount * 100);

const calculateCoins = (amount, coins) => {
  const coinValues = {
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };

  if (amount === 0) return coins;

  const [coinType, coinValue] = Object.entries(coinValues)
    .find(([_, value]) => value <= amount);

  const coinCount = Math.floor(amount / coinValue);

  return calculateCoins(
    amount - (coinCount * coinValue),
    { ...coins, [coinType]: (coins[coinType] || 0) + coinCount }
  );
};