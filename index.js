const products = [
  {
    name: "product 1",
    weight: 33
  },
  {
    name: "product 1",
    weight: 21
  },
  {
    name: "product 2",
    weight: 11
  },
  {
    name: "product 3",
    weight: 2
  },
  {
    name: "product 4",
    weight: 5
  },
  {
    name: "product 5",
    weight: 18
  },
  {
    name: "product 6",
    weight: 20
  },
  {
    name: "product 7",
    weight: 6
  },
  {
    name: "product 8",
    weight: 3
  },
  {
    name: "product 9",
    weight: 311
  },
  {
    name: "product 10",
    weight: 10
  }
];

function lbs2Kgs(lbs) {
  return lbs * 2.2;
}

const heavyShipment = products
  .map(product => {
    product.weight = lbs2Kgs(product.weight);
    return product;
  })
  .filter(product => product.weight > 25)
  .reduce((totalWeight, current) => {
    return (totalWeight += current.weight);
  }, 0);

console.log(heavyShipment);
/**
 * TODO: The items above have weights in POUNDS.
 * We need to convert the weights to KILOGRAMS,
 * and then build an Array that only has those that weight over 25 KILOGRAMS.
 * These heavier products need to be shipped separately,
 * so we have to separate them out.
 */
