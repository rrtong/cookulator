export const DROPDOWN = {
  BUTTER: (
    <>
      <option value="">Select units</option>
      <option value="sticksofbutter">Sticks of Butter</option>
      <option value="cups">Cups</option>
      <option value="tablespoons">Tablespoons</option>
      <option value="teaspoons">Teaspoons</option>
      <option value="milliliters">Milliliters</option>
      <option value="pounds">Pounds</option>
      <option value="ounces">Ounces</option>
      <option value="grams">Grams</option>
    </>
  ),
};

export const CONVERT = {
  BUTTER: {
    sticksofbutter: {
      sticksofbutter: (sob) => sob,
      cups: (sob) => sob * 0.5,
      tablespoons: (sob) => sob * 8,
      teaspoons: (sob) => sob * 24,
      milliliters: (sob) => sob * 118.29412,
      pounds: (sob) => sob * 0.25,
      ounces: (sob) => sob * 4,
      grams: (sob) => sob * 113.3984,
    },
    cups: {
      sticksofbutter: (c) => c * 2,
      cups: (c) => c,
      tablespoons: (c) => c * 16,
      teaspoons: (c) => c * 48,
      milliliters: (c) => c * 236.58824,
      pounds: (c) => c * 0.5,
      ounces: (c) => c * 8,
      grams: (c) => c * 226.7968,
    },
    tablespoons: {
      sticksofbutter: (tbsp) => tbsp * 0.125,
      cups: (tbsp) => tbsp * 0.0625,
      tablespoons: (tbsp) => tbsp,
      teaspoons: (tbsp) => tbsp * 3,
      milliliters: (tbsp) => tbsp * 14.786765,
      pounds: (tbsp) => tbsp * 0.03125,
      ounces: (tbsp) => tbsp * 0.5,
      grams: (tbsp) => tbsp * 14.1748,
    },
    teaspoons: {
      sticksofbutter: (tsp) => tsp * 0.041667,
      cups: (tsp) => tsp * 0.020833,
      tablespoons: (tsp) => tsp * 0.333333,
      teaspoons: (tsp) => tsp,
      milliliters: (tsp) => tsp * 4.928922,
      pounds: (tsp) => tsp * 0.010417,
      ounces: (tsp) => tsp * 0.166667,
      grams: (tsp) => tsp * 4.724933,
    },
    milliliters: {
      sticksofbutter: (mL) => mL * 0.008454,
      cups: (mL) => mL * 0.004227,
      tablespoons: (mL) => mL * 0.067628,
      teaspoons: (mL) => mL * 0.202884,
      milliliters: (mL) => mL,
      pounds: (mL) => mL * 0.002113,
      ounces: (mL) => mL * 0.033814,
      grams: (mL) => mL * 0.958614,
    },
    pounds: {
      sticksofbutter: (lb) => lb * 4,
      cups: (lb) => lb * 2,
      tablespoons: (lb) => lb * 32,
      teaspoons: (lb) => lb * 96,
      milliliters: (lb) => lb * 473.17648,
      pounds: (lb) => lb,
      ounces: (lb) => lb * 16,
      grams: (lb) => lb * 453.5936,
    },
    ounces: {
      sticksofbutter: (oz) => oz * 0.25,
      cups: (oz) => oz * 0.125,
      tablespoons: (oz) => oz * 2,
      teaspoons: (oz) => oz * 6,
      milliliters: (oz) => oz * 29.57353,
      pounds: (oz) => oz * 0.0625,
      ounces: (oz) => oz,
      grams: (oz) => oz * 28.3496,
    },
    grams: {
      sticksofbutter: (g) => g * 0.008818,
      cups: (g) => g * 0.004409,
      tablespoons: (g) => g * 0.070548,
      teaspoons: (g) => g * 0.211643,
      milliliters: (g) => g * 1.043173,
      pounds: (g) => g * 0.002205,
      ounces: (g) => g * 0.035274,
      grams: (g) => g,
    },
  },
};
