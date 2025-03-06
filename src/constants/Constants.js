export const DROPDOWN = {
  SELECTOR: (
    <>
      <option value="">What ingredient?</option>
      <option value="butter">butter</option>
      <option value="salt">salt</option>
    </>
  ),
  BUTTER: (
    <>
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
  FLOUR: (
    <>
      <option value="tablespoons">Tablespoons</option>
      <option value="teaspoons">Teaspoons</option>
      <option value="cups">Cups</option>
      <option value="quarts">Quarts</option>
      <option value="grams">Grams</option>
      <option value="kilograms">Kilograms</option>
      <option value="ounces">Ounces</option>
      <option value="pounds">Pounds</option>
    </>
  ),
  SALT: (
    <>
      <option value="smidgens">Smidgens</option>
      <option value="pinches">Pinches</option>
      <option value="dashes">Dashes</option>
      <option value="teaspoons">Teaspoons</option>
      <option value="tablespoons">Tablespoons</option>
      <option value="cups">Cups</option>
      <option value="grams">Grams</option>
    </>
  ),
};

const UNIT_TO_UNIT = (unit) => unit;
const C_TO_TBSP = (c) => c * 16;
const C_TO_TSP = (c) => c * 48;
const LB_TO_OZ = (lb) => lb * 16;
const LB_TO_G = (lb) => lb * 453.5936;
const OZ_TO_LB = (oz) => oz * 0.0625;
const TBSP_TO_C = (tbsp) => tbsp * 0.0625;
const TBSP_TO_TSP = (tbsp) => tbsp * 3;
const TSP_TO_C = (tsp) => tsp * 0.020833;
const TSP_TO_TBSP = (tsp) => tsp / 3;

export const CONVERT = {
  BUTTER: {
    sticksofbutter: {
      sticksofbutter: UNIT_TO_UNIT,
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
      cups: UNIT_TO_UNIT,
      tablespoons: C_TO_TBSP,
      teaspoons: C_TO_TSP,
      milliliters: (c) => c * 236.58824,
      pounds: (c) => c * 0.5,
      ounces: (c) => c * 8,
      grams: (c) => c * 226.7968,
    },
    tablespoons: {
      sticksofbutter: (tbsp) => tbsp * 0.125,
      cups: TBSP_TO_C,
      tablespoons: UNIT_TO_UNIT,
      teaspoons: TBSP_TO_TSP,
      milliliters: (tbsp) => tbsp * 14.786765,
      pounds: (tbsp) => tbsp * 0.03125,
      ounces: (tbsp) => tbsp * 0.5,
      grams: (tbsp) => tbsp * 14.1748,
    },
    teaspoons: {
      sticksofbutter: (tsp) => tsp * 0.041667,
      cups: TSP_TO_C,
      tablespoons: TSP_TO_TBSP,
      teaspoons: UNIT_TO_UNIT,
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
      milliliters: UNIT_TO_UNIT,
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
      pounds: UNIT_TO_UNIT,
      ounces: LB_TO_OZ,
      grams: (lb) => lb * 453.5936,
    },
    ounces: {
      sticksofbutter: (oz) => oz * 0.25,
      cups: (oz) => oz * 0.125,
      tablespoons: (oz) => oz * 2,
      teaspoons: (oz) => oz * 6,
      milliliters: (oz) => oz * 29.57353,
      pounds: OZ_TO_LB,
      ounces: UNIT_TO_UNIT,
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
      grams: UNIT_TO_UNIT,
    },
  },
  FLOUR: {
    teaspoons: {
      teaspoons: UNIT_TO_UNIT,
      tablespoons: TSP_TO_TBSP,
      cups: TSP_TO_C,
      quarts: (tsp) => tsp * 0.005208,
      grams: (tsp) => tsp * 2.604125,
      kilograms: (tsp) => tsp * 0.002604,
      ounces: (tsp) => tsp * 0.091858,
      pounds: (tsp) => tsp * 0.005741,
    },
  },
  SALT: {
    smidgens: {
      smidgens: UNIT_TO_UNIT,
      pinches: (s) => s / 2,
      dashes: (s) => s / 4,
      teaspoons: (s) => s * 0.03125,
      tablespoons: (s) => s * 0.010417,
      cups: (s) => s * 0.000651,
      grams: (s) => s * 0.177813,
    },
    pinches: {
      smidgens: (p) => p * 2,
      pinches: UNIT_TO_UNIT,
      dashes: (p) => p / 2,
      teaspoons: (p) => p * 0.0625,
      tablespoons: (p) => p * 0.020833,
      cups: (p) => p * 0.001302,
      grams: (p) => p * 0.355625,
    },
    dashes: {
      smidgens: (d) => d * 4,
      pinches: (d) => d * 2,
      dashes: UNIT_TO_UNIT,
      teaspoons: (d) => d * 0.125,
      tablespoons: (d) => d * 0.041667,
      cups: (d) => d * 0.002604,
      grams: (d) => d * 0.71125,
    },
    teaspoons: {
      smidgens: (tsp) => tsp * 32,
      pinches: (tsp) => tsp * 16,
      dashes: (tsp) => tsp * 8,
      teaspoons: UNIT_TO_UNIT,
      tablespoons: TSP_TO_TBSP,
      cups: TSP_TO_C,
      grams: (tsp) => tsp * 5.69,
    },
    tablespoons: {
      smidgens: (tbsp) => tbsp * 96,
      pinches: (tbsp) => tbsp * 48,
      dashes: (tbsp) => tbsp * 24,
      teaspoons: TBSP_TO_TSP,
      tablespoons: UNIT_TO_UNIT,
      cups: TBSP_TO_C,
      grams: (tbsp) => tbsp * 17.07,
    },
    cups: {
      smidgens: (c) => c * 1536,
      pinches: (c) => c * 768,
      dashes: (c) => c * 384,
      teaspoons: C_TO_TSP,
      tablespoons: C_TO_TBSP,
      cups: UNIT_TO_UNIT,
      grams: (c) => c * 273.12,
    },
    grams: {
      smidgens: (g) => g * 5.623902,
      pinches: (g) => g * 2.811951,
      dashes: (g) => g * 1.405975,
      teaspoons: (g) => g * 0.175747,
      tablespoons: (g) => g * 0.058582,
      cups: (g) => g * 0.003661,
      grams: UNIT_TO_UNIT,
    },
  },
};
