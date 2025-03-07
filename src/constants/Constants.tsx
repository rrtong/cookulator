import { JSX } from "react";

export const DROPDOWN: Record<string, JSX.Element> = {
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

const UNIT_TO_UNIT = (unit: number) => unit;
const C_TO_TBSP = (c: number) => c * 16;
const C_TO_TSP = (c: number) => c * 48;
const LB_TO_OZ = (lb: number) => lb * 16;
const LB_TO_G = (lb: number) => lb * 453.5936;
const OZ_TO_LB = (oz: number) => oz * 0.0625;
const TBSP_TO_C = (tbsp: number) => tbsp * 0.0625;
const TBSP_TO_TSP = (tbsp: number) => tbsp * 3;
const TSP_TO_C = (tsp: number) => tsp * 0.020833;
const TSP_TO_TBSP = (tsp: number) => tsp / 3;

export type ConversionFunction = (value: number) => number;
export type UnitConversions = Record<string, ConversionFunction>;
export type ConvertType = Record<string, Record<string, UnitConversions>>;
export const CONVERT: ConvertType = {
  BUTTER: {
    sticksofbutter: {
      sticksofbutter: UNIT_TO_UNIT,
      cups: (sob: number) => sob * 0.5,
      tablespoons: (sob: number) => sob * 8,
      teaspoons: (sob: number) => sob * 24,
      milliliters: (sob: number) => sob * 118.29412,
      pounds: (sob: number) => sob * 0.25,
      ounces: (sob: number) => sob * 4,
      grams: (sob: number) => sob * 113.3984,
    },
    cups: {
      sticksofbutter: (c: number) => c * 2,
      cups: UNIT_TO_UNIT,
      tablespoons: C_TO_TBSP,
      teaspoons: C_TO_TSP,
      milliliters: (c: number) => c * 236.58824,
      pounds: (c: number) => c * 0.5,
      ounces: (c: number) => c * 8,
      grams: (c: number) => c * 226.7968,
    },
    tablespoons: {
      sticksofbutter: (tbsp: number) => tbsp * 0.125,
      cups: TBSP_TO_C,
      tablespoons: UNIT_TO_UNIT,
      teaspoons: TBSP_TO_TSP,
      milliliters: (tbsp: number) => tbsp * 14.786765,
      pounds: (tbsp: number) => tbsp * 0.03125,
      ounces: (tbsp: number) => tbsp * 0.5,
      grams: (tbsp: number) => tbsp * 14.1748,
    },
    teaspoons: {
      sticksofbutter: (tsp: number) => tsp * 0.041667,
      cups: TSP_TO_C,
      tablespoons: TSP_TO_TBSP,
      teaspoons: UNIT_TO_UNIT,
      milliliters: (tsp: number) => tsp * 4.928922,
      pounds: (tsp: number) => tsp * 0.010417,
      ounces: (tsp: number) => tsp * 0.166667,
      grams: (tsp: number) => tsp * 4.724933,
    },
    milliliters: {
      sticksofbutter: (mL: number) => mL * 0.008454,
      cups: (mL: number) => mL * 0.004227,
      tablespoons: (mL: number) => mL * 0.067628,
      teaspoons: (mL: number) => mL * 0.202884,
      milliliters: UNIT_TO_UNIT,
      pounds: (mL: number) => mL * 0.002113,
      ounces: (mL: number) => mL * 0.033814,
      grams: (mL: number) => mL * 0.958614,
    },
    pounds: {
      sticksofbutter: (lb: number) => lb * 4,
      cups: (lb: number) => lb * 2,
      tablespoons: (lb: number) => lb * 32,
      teaspoons: (lb: number) => lb * 96,
      milliliters: (lb: number) => lb * 473.17648,
      pounds: UNIT_TO_UNIT,
      ounces: LB_TO_OZ,
      grams: (lb: number) => lb * 453.5936,
    },
    ounces: {
      sticksofbutter: (oz: number) => oz * 0.25,
      cups: (oz: number) => oz * 0.125,
      tablespoons: (oz: number) => oz * 2,
      teaspoons: (oz: number) => oz * 6,
      milliliters: (oz: number) => oz * 29.57353,
      pounds: OZ_TO_LB,
      ounces: UNIT_TO_UNIT,
      grams: (oz: number) => oz * 28.3496,
    },
    grams: {
      sticksofbutter: (g: number) => g * 0.008818,
      cups: (g: number) => g * 0.004409,
      tablespoons: (g: number) => g * 0.070548,
      teaspoons: (g: number) => g * 0.211643,
      milliliters: (g: number) => g * 1.043173,
      pounds: (g: number) => g * 0.002205,
      ounces: (g: number) => g * 0.035274,
      grams: UNIT_TO_UNIT,
    },
  },
  FLOUR: {
    teaspoons: {
      teaspoons: UNIT_TO_UNIT,
      tablespoons: TSP_TO_TBSP,
      cups: TSP_TO_C,
      quarts: (tsp: number) => tsp * 0.005208,
      grams: (tsp: number) => tsp * 2.604125,
      kilograms: (tsp: number) => tsp * 0.002604,
      ounces: (tsp: number) => tsp * 0.091858,
      pounds: (tsp: number) => tsp * 0.005741,
    },
  },
  SALT: {
    smidgens: {
      smidgens: UNIT_TO_UNIT,
      pinches: (s: number) => s / 2,
      dashes: (s: number) => s / 4,
      teaspoons: (s: number) => s * 0.03125,
      tablespoons: (s: number) => s * 0.010417,
      cups: (s: number) => s * 0.000651,
      grams: (s: number) => s * 0.177813,
    },
    pinches: {
      smidgens: (p: number) => p * 2,
      pinches: UNIT_TO_UNIT,
      dashes: (p: number) => p / 2,
      teaspoons: (p: number) => p * 0.0625,
      tablespoons: (p: number) => p * 0.020833,
      cups: (p: number) => p * 0.001302,
      grams: (p: number) => p * 0.355625,
    },
    dashes: {
      smidgens: (d: number) => d * 4,
      pinches: (d: number) => d * 2,
      dashes: UNIT_TO_UNIT,
      teaspoons: (d: number) => d * 0.125,
      tablespoons: (d: number) => d * 0.041667,
      cups: (d: number) => d * 0.002604,
      grams: (d: number) => d * 0.71125,
    },
    teaspoons: {
      smidgens: (tsp: number) => tsp * 32,
      pinches: (tsp: number) => tsp * 16,
      dashes: (tsp: number) => tsp * 8,
      teaspoons: UNIT_TO_UNIT,
      tablespoons: TSP_TO_TBSP,
      cups: TSP_TO_C,
      grams: (tsp: number) => tsp * 5.69,
    },
    tablespoons: {
      smidgens: (tbsp: number) => tbsp * 96,
      pinches: (tbsp: number) => tbsp * 48,
      dashes: (tbsp: number) => tbsp * 24,
      teaspoons: TBSP_TO_TSP,
      tablespoons: UNIT_TO_UNIT,
      cups: TBSP_TO_C,
      grams: (tbsp: number) => tbsp * 17.07,
    },
    cups: {
      smidgens: (c: number) => c * 1536,
      pinches: (c: number) => c * 768,
      dashes: (c: number) => c * 384,
      teaspoons: C_TO_TSP,
      tablespoons: C_TO_TBSP,
      cups: UNIT_TO_UNIT,
      grams: (c: number) => c * 273.12,
    },
    grams: {
      smidgens: (g: number) => g * 5.623902,
      pinches: (g: number) => g * 2.811951,
      dashes: (g: number) => g * 1.405975,
      teaspoons: (g: number) => g * 0.175747,
      tablespoons: (g: number) => g * 0.058582,
      cups: (g: number) => g * 0.003661,
      grams: UNIT_TO_UNIT,
    },
  },
};
