import { JSX } from "react";
import butter from "../assets/buttonImages/butter.png";
import flour from "../assets/buttonImages/flour.png";
import salt from "../assets/buttonImages/salt.png";
import sugar from "../assets/buttonImages/sugar.png";

export const INGREDIENTS: Array<string> = ["butter", "flour", "salt", "sugar"];

export const INGREDIENTS_COLOR: Array<string> = [
  "#ccffcc",
  "#ccffff",
  "#ccccff",
  "#ffcccc",
  "#ffffcc",
];

export const INGREDIENTS_ICON: Array<string> = [butter, flour, salt, sugar];

export const DROPDOWN: Record<string, JSX.Element> = {
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
      <option value="teaspoons">Teaspoons</option>
      <option value="tablespoons">Tablespoons</option>
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
  SUGAR: (
    <>
      <option value="teaspoons">Teaspoons</option>
      <option value="tablespoons">Tablespoons</option>
      <option value="cups">Cups</option>
      <option value="quarts">Quarts</option>
      <option value="grams">Grams</option>
      <option value="kilograms">Kilograms</option>
      <option value="ounces">Ounces</option>
      <option value="pounds">Pounds</option>
    </>
  ),
};

export const DROPDOWN_TYPE: Record<string, JSX.Element> = {
  FLOUR: (
    <>
      <option value="allpurposeflour">All-Purpose Flour</option>
      <option value="wheatflour">Wheat Flour</option>
      <option value="breadflour">Bread Flour</option>
      <option value="type00flour">Type 00 Flour</option>
      <option value="cakeflour">Cake/Pastry Flour</option>
      <option value="ryeflour">Rye Flour</option>
      <option value="plainflour">Plain Flour</option>
      <option value="wholemealflour">Wholemeal Flour</option>
    </>
  ),
  SUGAR: (
    <>
      <option value="granulatedsugar">Granulated Sugar</option>
      <option value="brownsugar">Brown Sugar</option>
      <option value="powderedsugar">Powdered/Confectioner's Sugar</option>
      <option value="rawsugar">Raw Sugar</option>
    </>
  ),
};

const UNIT_TO_UNIT = (unit: number) => unit;
const C_TO_TBSP = (c: number) => c * 16;
const C_TO_TSP = (c: number) => c * 48;
const LB_TO_OZ = (lb: number) => lb * 16;
const OZ_TO_LB = (oz: number) => oz * 0.0625;
const QT_TO_C = (qt: number) => qt * 4;
const QT_TO_TBSP = (qt: number) => qt * 64;
const QT_TO_TSP = (qt: number) => qt * 192;
const TBSP_TO_C = (tbsp: number) => tbsp * 0.0625;
const TBSP_TO_TSP = (tbsp: number) => tbsp * 3;
const TSP_TO_C = (tsp: number) => tsp * 0.020833;
const TSP_TO_TBSP = (tsp: number) => tsp / 3;
const KG_TO_G = (kg: number) => kg * 1000;
const G_TO_KG = (g: number) => g / 1000;

const FLOUR_TSP_TO_G = (tsp: number, ingredientType: string | undefined) => {
  if (ingredientType === "allpurposeflour" || ingredientType === "plainflour") {
    return tsp * 2.604125;
  } else if (
    ingredientType === "wheatflour" ||
    ingredientType === "wholemealflour"
  ) {
    return tsp * 2.49996;
  } else if (
    ingredientType === "breadflour" ||
    ingredientType === "type00flour"
  ) {
    return tsp * 2.645791;
  } else if (ingredientType === "cakeflour") {
    return tsp * 2.0833;
  } else if (ingredientType === "ryeflour") {
    return tsp * 2.124966;
  }
  return 0;
};
const FLOUR_TSP_TO_KG = (tsp: number, ingredientType: string | undefined) => {
  return FLOUR_TSP_TO_G(tsp, ingredientType) / 1000;
};
const FLOUR_TSP_TO_OZ = (tsp: number, ingredientType: string | undefined) => {
  if (ingredientType === "allpurposeflour" || ingredientType === "plainflour") {
    return tsp * 0.091858;
  } else if (
    ingredientType === "wheatflour" ||
    ingredientType === "wholemealflour"
  ) {
    return tsp * 0.088184;
  } else if (
    ingredientType === "breadflour" ||
    ingredientType === "type00flour"
  ) {
    return tsp * 0.093328;
  } else if (ingredientType === "cakeflour") {
    return tsp * 0.073486;
  } else if (ingredientType === "ryeflour") {
    return tsp * 0.074956;
  }
  return 0;
};
const FLOUR_TSP_TO_LB = (tsp: number, ingredientType: string | undefined) => {
  return FLOUR_TSP_TO_OZ(tsp, ingredientType) / 16;
};

const FLOUR_TBSP_TO_G = (tbsp: number, ingredientType: string | undefined) => {
  return FLOUR_TSP_TO_G(tbsp, ingredientType) * 3;
};
const FLOUR_TBSP_TO_KG = (tbsp: number, ingredientType: string | undefined) => {
  return FLOUR_TSP_TO_KG(tbsp, ingredientType) * 3;
};
const FLOUR_TBSP_TO_OZ = (tbsp: number, ingredientType: string | undefined) => {
  return FLOUR_TSP_TO_OZ(tbsp, ingredientType) * 3;
};
const FLOUR_TBSP_TO_LB = (tbsp: number, ingredientType: string | undefined) => {
  return FLOUR_TSP_TO_LB(tbsp, ingredientType) * 3;
};

const FLOUR_C_TO_G = (c: number, ingredientType: string | undefined) => {
  if (ingredientType === "allpurposeflour" || ingredientType === "plainflour") {
    return c * 125;
  } else if (
    ingredientType === "wheatflour" ||
    ingredientType === "wholemealflour"
  ) {
    return c * 120;
  } else if (
    ingredientType === "breadflour" ||
    ingredientType === "type00flour"
  ) {
    return c * 127;
  } else if (ingredientType === "cakeflour") {
    return c * 100;
  } else if (ingredientType === "ryeflour") {
    return c * 102;
  }
  return 0;
};
const FLOUR_C_TO_KG = (c: number, ingredientType: string | undefined) => {
  return FLOUR_C_TO_G(c, ingredientType) / 1000;
};
const FLOUR_C_TO_OZ = (c: number, ingredientType: string | undefined) => {
  if (ingredientType === "allpurposeflour" || ingredientType === "plainflour") {
    return c * 4.409245;
  } else if (
    ingredientType === "wheatflour" ||
    ingredientType === "wholemealflour"
  ) {
    return c * 4.232875;
  } else if (
    ingredientType === "breadflour" ||
    ingredientType === "type00flour"
  ) {
    return c * 4.479793;
  } else if (ingredientType === "cakeflour") {
    return c * 3.527396;
  } else if (ingredientType === "ryeflour") {
    return c * 3.597944;
  }
  return 0;
};
const FLOUR_C_TO_LB = (c: number, ingredientType: string | undefined) => {
  return FLOUR_C_TO_OZ(c, ingredientType) / 16;
};

const FLOUR_QT_TO_G = (qt: number, ingredientType: string | undefined) => {
  return FLOUR_C_TO_G(qt, ingredientType) * 4;
};
const FLOUR_QT_TO_KG = (qt: number, ingredientType: string | undefined) => {
  return FLOUR_C_TO_KG(qt, ingredientType) * 4;
};
const FLOUR_QT_TO_OZ = (qt: number, ingredientType: string | undefined) => {
  return FLOUR_C_TO_OZ(qt, ingredientType) * 4;
};
const FLOUR_QT_TO_LB = (qt: number, ingredientType: string | undefined) => {
  return FLOUR_C_TO_LB(qt, ingredientType) * 4;
};

const FLOUR_G_TO_TSP = (g: number, ingredientType: string | undefined) => {
  if (ingredientType === "allpurposeflour" || ingredientType === "plainflour") {
    return g * 0.384006;
  } else if (
    ingredientType === "wheatflour" ||
    ingredientType === "wholemealflour"
  ) {
    return g * 0.400006;
  } else if (
    ingredientType === "breadflour" ||
    ingredientType === "type00flour"
  ) {
    return g * 0.377959;
  } else if (ingredientType === "cakeflour") {
    return g * 0.480008;
  } else if (ingredientType === "ryeflour") {
    return g * 0.470596;
  }
  return 0;
};
const FLOUR_G_TO_TBSP = (g: number, ingredientType: string | undefined) => {
  return FLOUR_G_TO_TSP(g, ingredientType) / 3;
};
const FLOUR_G_TO_C = (g: number, ingredientType: string | undefined) => {
  if (ingredientType === "allpurposeflour" || ingredientType === "plainflour") {
    return g * 0.008;
  } else if (
    ingredientType === "wheatflour" ||
    ingredientType === "wholemealflour"
  ) {
    return g * 0.008333;
  } else if (
    ingredientType === "breadflour" ||
    ingredientType === "type00flour"
  ) {
    return g * 0.007874;
  } else if (ingredientType === "cakeflour") {
    return g * 0.01;
  } else if (ingredientType === "ryeflour") {
    return g * 0.009804;
  }
  return 0;
};
const FLOUR_G_TO_QT = (g: number, ingredientType: string | undefined) => {
  return FLOUR_G_TO_C(g, ingredientType) / 4;
};

const FLOUR_KG_TO_TSP = (kg: number, ingredientType: string | undefined) => {
  return FLOUR_G_TO_TSP(kg, ingredientType) * 1000;
};
const FLOUR_KG_TO_TBSP = (kg: number, ingredientType: string | undefined) => {
  return FLOUR_G_TO_TBSP(kg, ingredientType) * 1000;
};
const FLOUR_KG_TO_C = (kg: number, ingredientType: string | undefined) => {
  return FLOUR_G_TO_C(kg, ingredientType) * 1000;
};
const FLOUR_KG_TO_QT = (kg: number, ingredientType: string | undefined) => {
  return FLOUR_G_TO_QT(kg, ingredientType) * 1000;
};

const FLOUR_OZ_TO_TSP = (oz: number, ingredientType: string | undefined) => {
  if (ingredientType === "allpurposeflour" || ingredientType === "plainflour") {
    return oz * 10.886391;
  } else if (
    ingredientType === "wheatflour" ||
    ingredientType === "wholemealflour"
  ) {
    return oz * 11.339991;
  } else if (
    ingredientType === "breadflour" ||
    ingredientType === "type00flour"
  ) {
    return oz * 10.714952;
  } else if (ingredientType === "cakeflour") {
    return oz * 13.607989;
  } else if (ingredientType === "ryeflour") {
    return oz * 10.886391;
  }
  return 0;
};
const FLOUR_OZ_TO_TBSP = (oz: number, ingredientType: string | undefined) => {
  return FLOUR_OZ_TO_TSP(oz, ingredientType) / 3;
};
const FLOUR_OZ_TO_C = (oz: number, ingredientType: string | undefined) => {
  if (ingredientType === "allpurposeflour" || ingredientType === "plainflour") {
    return oz * 0.226796;
  } else if (
    ingredientType === "wheatflour" ||
    ingredientType === "wholemealflour"
  ) {
    return oz * 0.236246;
  } else if (
    ingredientType === "breadflour" ||
    ingredientType === "type00flour"
  ) {
    return oz * 0.223224;
  } else if (ingredientType === "cakeflour") {
    return oz * 0.283495;
  } else if (ingredientType === "ryeflour") {
    return oz * 0.277936;
  }
  return 0;
};
const FLOUR_OZ_TO_QT = (oz: number, ingredientType: string | undefined) => {
  return FLOUR_OZ_TO_C(oz, ingredientType) / 4;
};

const FLOUR_LB_TO_TSP = (lb: number, ingredientType: string | undefined) => {
  return FLOUR_OZ_TO_TSP(lb, ingredientType) * 16;
};
const FLOUR_LB_TO_TBSP = (lb: number, ingredientType: string | undefined) => {
  return FLOUR_OZ_TO_TBSP(lb, ingredientType) * 16;
};
const FLOUR_LB_TO_C = (lb: number, ingredientType: string | undefined) => {
  return FLOUR_OZ_TO_C(lb, ingredientType) * 16;
};
const FLOUR_LB_TO_QT = (lb: number, ingredientType: string | undefined) => {
  return FLOUR_OZ_TO_QT(lb, ingredientType) * 16;
};

const SUGAR_TSP_TO_G = (tsp: number, ingredientType: string | undefined) => {
  if (ingredientType === "granulatedsugar" || ingredientType === "brownsugar") {
    return tsp * 4.166667;
  } else if (ingredientType === "powderedsugar") {
    return tsp * 2.604167;
  } else if (ingredientType === "rawsugar") {
    return tsp * 5.208334;
  }
  return 0;
};
const SUGAR_TSP_TO_KG = (tsp: number, ingredientType: string | undefined) => {
  return SUGAR_TSP_TO_G(tsp, ingredientType) / 1000;
};
const SUGAR_TSP_TO_OZ = (tsp: number, ingredientType: string | undefined) => {
  if (ingredientType === "granulatedsugar" || ingredientType === "brownsugar") {
    return tsp * 0.146975;
  } else if (ingredientType === "powderedsugar") {
    return tsp * 0.091859;
  } else if (ingredientType === "rawsugar") {
    return tsp * 0.183719;
  }
  return 0;
};
const SUGAR_TSP_TO_LB = (tsp: number, ingredientType: string | undefined) => {
  return SUGAR_TSP_TO_OZ(tsp, ingredientType) / 16;
};

const SUGAR_TBSP_TO_G = (tbsp: number, ingredientType: string | undefined) => {
  return SUGAR_TSP_TO_G(tbsp, ingredientType) * 3;
};
const SUGAR_TBSP_TO_KG = (tbsp: number, ingredientType: string | undefined) => {
  return SUGAR_TSP_TO_KG(tbsp, ingredientType) * 3;
};
const SUGAR_TBSP_TO_OZ = (tbsp: number, ingredientType: string | undefined) => {
  return SUGAR_TSP_TO_OZ(tbsp, ingredientType) * 3;
};
const SUGAR_TBSP_TO_LB = (tbsp: number, ingredientType: string | undefined) => {
  return SUGAR_TSP_TO_LB(tbsp, ingredientType) * 3;
};

const SUGAR_C_TO_G = (c: number, ingredientType: string | undefined) => {
  if (ingredientType === "granulatedsugar" || ingredientType === "brownsugar") {
    return c * 200;
  } else if (ingredientType === "powderedsugar") {
    return c * 125;
  } else if (ingredientType === "rawsugar") {
    return c * 250;
  }
  return 0;
};
const SUGAR_C_TO_KG = (c: number, ingredientType: string | undefined) => {
  return SUGAR_C_TO_G(c, ingredientType) / 1000;
};
const SUGAR_C_TO_OZ = (c: number, ingredientType: string | undefined) => {
  if (ingredientType === "granulatedsugar" || ingredientType === "brownsugar") {
    return c * 7.054792;
  } else if (ingredientType === "powderedsugar") {
    return c * 4.409245;
  } else if (ingredientType === "rawsugar") {
    return c * 8.81849;
  }
  return 0;
};
const SUGAR_C_TO_LB = (c: number, ingredientType: string | undefined) => {
  return SUGAR_C_TO_OZ(c, ingredientType) / 16;
};

const SUGAR_QT_TO_G = (qt: number, ingredientType: string | undefined) => {
  return SUGAR_C_TO_G(qt, ingredientType) * 4;
};
const SUGAR_QT_TO_KG = (qt: number, ingredientType: string | undefined) => {
  return SUGAR_C_TO_KG(qt, ingredientType) * 4;
};
const SUGAR_QT_TO_OZ = (qt: number, ingredientType: string | undefined) => {
  return SUGAR_C_TO_OZ(qt, ingredientType) * 4;
};
const SUGAR_QT_TO_LB = (qt: number, ingredientType: string | undefined) => {
  return SUGAR_C_TO_LB(qt, ingredientType) * 4;
};

const SUGAR_G_TO_TSP = (g: number, ingredientType: string | undefined) => {
  if (ingredientType === "granulatedsugar" || ingredientType === "brownsugar") {
    return g * 0.24;
  } else if (ingredientType === "powderedsugar") {
    return g * 0.384;
  } else if (ingredientType === "rawsugar") {
    return g * 0.192;
  }
  return 0;
};
const SUGAR_G_TO_TBSP = (g: number, ingredientType: string | undefined) => {
  return SUGAR_G_TO_TSP(g, ingredientType) / 3;
};
const SUGAR_G_TO_C = (g: number, ingredientType: string | undefined) => {
  if (ingredientType === "granulatedsugar" || ingredientType === "brownsugar") {
    return g * 0.005;
  } else if (ingredientType === "powderedsugar") {
    return g * 0.008;
  } else if (ingredientType === "rawsugar") {
    return g * 0.004;
  }
  return 0;
};
const SUGAR_G_TO_QT = (g: number, ingredientType: string | undefined) => {
  return SUGAR_G_TO_C(g, ingredientType) / 4;
};

const SUGAR_KG_TO_TSP = (kg: number, ingredientType: string | undefined) => {
  return SUGAR_G_TO_TSP(kg, ingredientType) * 1000;
};
const SUGAR_KG_TO_TBSP = (kg: number, ingredientType: string | undefined) => {
  return SUGAR_G_TO_TBSP(kg, ingredientType) * 1000;
};
const SUGAR_KG_TO_C = (kg: number, ingredientType: string | undefined) => {
  return SUGAR_G_TO_C(kg, ingredientType) * 1000;
};
const SUGAR_KG_TO_QT = (kg: number, ingredientType: string | undefined) => {
  return SUGAR_G_TO_QT(kg, ingredientType) * 1000;
};

const SUGAR_OZ_TO_TSP = (oz: number, ingredientType: string | undefined) => {
  if (ingredientType === "granulatedsugar" || ingredientType === "brownsugar") {
    return oz * 6.803886;
  } else if (ingredientType === "powderedsugar") {
    return oz * 10.886218;
  } else if (ingredientType === "rawsugar") {
    return oz * 5.443109;
  }
  return 0;
};
const SUGAR_OZ_TO_TBSP = (oz: number, ingredientType: string | undefined) => {
  return SUGAR_OZ_TO_TSP(oz, ingredientType) / 3;
};
const SUGAR_OZ_TO_C = (oz: number, ingredientType: string | undefined) => {
  if (ingredientType === "granulatedsugar" || ingredientType === "brownsugar") {
    return oz * 0.141748;
  } else if (ingredientType === "powderedsugar") {
    return oz * 0.226797;
  } else if (ingredientType === "rawsugar") {
    return oz * 0.113398;
  }
  return 0;
};
const SUGAR_OZ_TO_QT = (oz: number, ingredientType: string | undefined) => {
  return SUGAR_OZ_TO_C(oz, ingredientType) / 4;
};

const SUGAR_LB_TO_TSP = (lb: number, ingredientType: string | undefined) => {
  return SUGAR_OZ_TO_TSP(lb, ingredientType) * 16;
};
const SUGAR_LB_TO_TBSP = (lb: number, ingredientType: string | undefined) => {
  return SUGAR_OZ_TO_TBSP(lb, ingredientType) * 16;
};
const SUGAR_LB_TO_C = (lb: number, ingredientType: string | undefined) => {
  return SUGAR_OZ_TO_C(lb, ingredientType) * 16;
};
const SUGAR_LB_TO_QT = (lb: number, ingredientType: string | undefined) => {
  return SUGAR_OZ_TO_QT(lb, ingredientType) * 16;
};

export type ConversionFunction = (
  value: number,
  ingredientType?: string | undefined
) => number;
export type ToUnitConversion = Record<string, ConversionFunction>;
export type FromUnitConversion = Record<
  string,
  Record<string, ToUnitConversion>
>;
export const CONVERT: FromUnitConversion = {
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
      grams: FLOUR_TSP_TO_G, // check ingredientType
      kilograms: FLOUR_TSP_TO_KG, // check ingredientType
      ounces: FLOUR_TSP_TO_OZ, // check ingredientType
      pounds: FLOUR_TSP_TO_LB, // check ingredientType
    },
    tablespoons: {
      teaspoons: TBSP_TO_TSP,
      tablespoons: UNIT_TO_UNIT,
      cups: TBSP_TO_C,
      quart: (tbsp: number) => tbsp * 0.015625,
      gram: FLOUR_TBSP_TO_G, // check ingredientType
      kilograms: FLOUR_TBSP_TO_KG, // check ingredientType
      ounces: FLOUR_TBSP_TO_OZ, // check ingredientType
      pounds: FLOUR_TBSP_TO_LB, // check ingredientType
    },
    cups: {
      teaspoons: C_TO_TSP,
      tablespoons: C_TO_TBSP,
      cups: UNIT_TO_UNIT,
      quarts: (c: number) => c / 4,
      grams: FLOUR_C_TO_G, // check ingredientType
      kilograms: FLOUR_C_TO_KG, // check ingredientType
      ounces: FLOUR_C_TO_OZ, // check ingredientType
      pounds: FLOUR_C_TO_LB, // check ingredientType
    },
    quarts: {
      teaspoons: QT_TO_TSP,
      tablespoons: QT_TO_TBSP,
      cups: QT_TO_C,
      quarts: UNIT_TO_UNIT,
      grams: FLOUR_QT_TO_G, // check ingredientType
      kilograms: FLOUR_QT_TO_KG, // check ingredientType
      ounces: FLOUR_QT_TO_OZ, // check ingredientType
      pounds: FLOUR_QT_TO_LB, // check ingredientType
    },
    grams: {
      teaspoons: FLOUR_G_TO_TSP, // check ingredientType
      tablespoons: FLOUR_G_TO_TBSP, // check ingredientType
      cups: FLOUR_G_TO_C, // check ingredientType
      quarts: FLOUR_G_TO_QT, // check ingredientType
      grams: UNIT_TO_UNIT,
      kilograms: G_TO_KG,
      ounces: (g: number) => g * 0.035274,
      pounds: (g: number) => g * 0.002205,
    },
    kilograms: {
      teaspoons: FLOUR_KG_TO_TSP, // check ingredientType
      tablespoons: FLOUR_KG_TO_TBSP, // check ingredientType
      cups: FLOUR_KG_TO_C, // check ingredientType
      quarts: FLOUR_KG_TO_QT, // check ingredientType
      grams: KG_TO_G,
      kilograms: UNIT_TO_UNIT,
      ounces: (kg: number) => kg * 35.273962,
      pounds: (kg: number) => kg * 2.204623,
    },
    ounces: {
      teaspoons: FLOUR_KG_TO_TSP, // check ingredientType
      tablespoons: FLOUR_KG_TO_TBSP, // check ingredientType
      cups: FLOUR_KG_TO_C, // check ingredientType
      quarts: FLOUR_KG_TO_QT, // check ingredientType
      grams: (oz: number) => oz * 28.349523,
      kilograms: (oz: number) => oz * 0.02835,
      ounces: UNIT_TO_UNIT,
      pounds: OZ_TO_LB,
    },
    pounds: {
      teaspoons: FLOUR_LB_TO_TSP, // check ingredientType
      tablespoons: FLOUR_LB_TO_TBSP, // check ingredientType
      cups: FLOUR_LB_TO_C, // check ingredientType
      quarts: FLOUR_LB_TO_QT, // check ingredientType
      grams: (lb: number) => lb * 453.59237,
      kilograms: (lb: number) => lb * 0.453592,
      ounces: LB_TO_OZ,
      pounds: UNIT_TO_UNIT,
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
  SUGAR: {
    teaspoons: {
      teaspoons: UNIT_TO_UNIT,
      tablespoons: TSP_TO_TBSP,
      cups: TSP_TO_C,
      quarts: (tsp: number) => tsp * 0.005208,
      grams: SUGAR_TSP_TO_G, // check ingredientType
      kilograms: SUGAR_TSP_TO_KG, // check ingredientType
      ounces: SUGAR_TSP_TO_OZ, // check ingredientType
      pounds: SUGAR_TSP_TO_LB, // check ingredientType
    },
    tablespoons: {
      teaspoons: TBSP_TO_TSP,
      tablespoons: UNIT_TO_UNIT,
      cups: TBSP_TO_C,
      quart: (tbsp: number) => tbsp * 0.015625,
      gram: SUGAR_TBSP_TO_G, // check ingredientType
      kilograms: SUGAR_TBSP_TO_KG, // check ingredientType
      ounces: SUGAR_TBSP_TO_OZ, // check ingredientType
      pounds: SUGAR_TBSP_TO_LB, // check ingredientType
    },
    cups: {
      teaspoons: C_TO_TSP,
      tablespoons: C_TO_TBSP,
      cups: UNIT_TO_UNIT,
      quarts: (c: number) => c / 4,
      grams: SUGAR_C_TO_G, // check ingredientType
      kilograms: SUGAR_C_TO_KG, // check ingredientType
      ounces: SUGAR_C_TO_OZ, // check ingredientType
      pounds: SUGAR_C_TO_LB, // check ingredientType
    },
    quarts: {
      teaspoons: QT_TO_TSP,
      tablespoons: QT_TO_TBSP,
      cups: QT_TO_C,
      quarts: UNIT_TO_UNIT,
      grams: SUGAR_QT_TO_G, // check ingredientType
      kilograms: SUGAR_QT_TO_KG, // check ingredientType
      ounces: SUGAR_QT_TO_OZ, // check ingredientType
      pounds: SUGAR_QT_TO_LB, // check ingredientType
    },
    grams: {
      teaspoons: SUGAR_G_TO_TSP, // check ingredientType
      tablespoons: SUGAR_G_TO_TBSP, // check ingredientType
      cups: SUGAR_G_TO_C, // check ingredientType
      quarts: SUGAR_G_TO_QT, // check ingredientType
      grams: UNIT_TO_UNIT,
      kilograms: G_TO_KG,
      ounces: (g: number) => g * 0.035274,
      pounds: (g: number) => g * 0.002205,
    },
    kilograms: {
      teaspoons: SUGAR_KG_TO_TSP, // check ingredientType
      tablespoons: SUGAR_KG_TO_TBSP, // check ingredientType
      cups: SUGAR_KG_TO_C, // check ingredientType
      quarts: SUGAR_KG_TO_QT, // check ingredientType
      grams: KG_TO_G,
      kilograms: UNIT_TO_UNIT,
      ounces: (kg: number) => kg * 35.273962,
      pounds: (kg: number) => kg * 2.204623,
    },
    ounces: {
      teaspoons: SUGAR_KG_TO_TSP, // check ingredientType
      tablespoons: SUGAR_KG_TO_TBSP, // check ingredientType
      cups: SUGAR_KG_TO_C, // check ingredientType
      quarts: SUGAR_KG_TO_QT, // check ingredientType
      grams: (oz: number) => oz * 28.349523,
      kilograms: (oz: number) => oz * 0.02835,
      ounces: UNIT_TO_UNIT,
      pounds: OZ_TO_LB,
    },
    pounds: {
      teaspoons: SUGAR_LB_TO_TSP, // check ingredientType
      tablespoons: SUGAR_LB_TO_TBSP, // check ingredientType
      cups: SUGAR_LB_TO_C, // check ingredientType
      quarts: SUGAR_LB_TO_QT, // check ingredientType
      grams: (lb: number) => lb * 453.59237,
      kilograms: (lb: number) => lb * 0.453592,
      ounces: LB_TO_OZ,
      pounds: UNIT_TO_UNIT,
    },
  },
};
