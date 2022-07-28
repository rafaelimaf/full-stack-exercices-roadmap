"use strict";
const lengthUnits = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convertLength(value, baseUnit, finalUnit) {
    const baseIndex = lengthUnits.indexOf(baseUnit); // pegamos o index da unidade base no array
    const finalIndex = lengthUnits.indexOf(finalUnit); // pegamos o index da unidade para a conversão
    const exponent = (baseIndex - finalIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
console.log(convertLength(10, 'km', 'dam'));
