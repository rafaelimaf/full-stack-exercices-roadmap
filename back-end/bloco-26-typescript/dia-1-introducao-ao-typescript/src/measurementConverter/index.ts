const readLine = require('readline-sync');

const measures = [
  { name: 'Conversor de Comprimento', measure: './length' },
  { name: 'Conversor de Massa', measure: './mass' },
  { name: 'Conversor de Volume', measure: './capacity' }
];

const chosenMeasure = readLine.keyInSelect(measures.map(measure => measure.name), 'Qual conversor você deseja utilizar?');

const measurementUnits = require(measures[chosenMeasure].measure);
const converter = Object.values(measurementUnits)[0];

function measurementConverter (converter:any) {
  const measure = readLine.question('Qual o valor da sua medida?');

  const baseUnit = readLine.keyInSelect(Object.values(converter), 'Qual a unidade de medida de seu valor?');

  const finalUnit = readLine.keyInSelect(Object.values(converter), 'Para qual unidade de medida você deseja converter seu valor?');

  const exponent = finalUnit - baseUnit;

  function convertlength (value:number, exponent:number) {
    return value * Math.pow(10, exponent);
  }

  const result = convertlength(measure, exponent);
  const unit = Object.keys(converter)[finalUnit];

  return console.log(`O valor de sua medida convertida é ${result + unit}`);
}

measurementConverter(converter);
