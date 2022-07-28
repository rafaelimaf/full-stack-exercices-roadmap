"use strict";
const readLine = require('readline-sync');
var massUnits;
(function (massUnits) {
    massUnits["kg"] = "Kilogramas";
    massUnits["hg"] = "Hectogramas";
    massUnits["dag"] = "Decagramas";
    massUnits["g"] = "Gramas";
    massUnits["dg"] = "Decigramas";
    massUnits["cg"] = "Centigramas";
    massUnits["mg"] = "Miligramas";
})(massUnits || (massUnits = {}));
const measure = readLine.question('Qual o valor da sua medida?');
const baseUnit = readLine.keyInSelect(Object.values(massUnits), 'Qual a unidade de medida de seu valor?');
console.log(baseUnit);
const finalUnit = readLine.keyInSelect(Object.values(massUnits), 'Para qual unidade de medida você deseja converter seu valor?');
console.log(finalUnit);
const exponent = finalUnit - baseUnit;
console.log(exponent);
function convertMass(value, exponent) {
    return value * Math.pow(10, exponent);
}
const result = convertMass(measure, exponent);
const unit = Object.keys(massUnits)[finalUnit];
console.log(`O valor de sua medida convertida é ${result + unit}`);
