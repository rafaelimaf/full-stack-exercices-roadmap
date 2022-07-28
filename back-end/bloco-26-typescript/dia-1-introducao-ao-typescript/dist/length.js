"use strict";
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convert(value, baseUnit, finalUnit) {
    const baseIndex = units.indexOf(baseUnit); // pegamos o index da unidade base no array
    const finalIndex = units.indexOf(finalUnit); // pegamos o index da unidade para a conversão
    const exponent = (baseIndex - finalIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
console.log(convert(10, 'km', 'dam'));
